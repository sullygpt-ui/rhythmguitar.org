import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const TABLE = 'rhythmguitar_outbound_clicks';
const SITE = 'rhythmguitar.org';

// Only log clicks heading to hosts we actually have affiliate links with, so the
// public endpoint cannot be used as an open write-anything logger.
const ALLOWED_HOSTS = ['signalsmusic.studio'];

const MAX_URL = 2048;
const MAX_REFERRER = 2048;
const MAX_USER_AGENT = 200;

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

function clamp(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

function isAllowedUrl(raw: string): boolean {
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
    return ALLOWED_HOSTS.some(
      (host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`)
    );
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  if (!supabase) {
    console.error('track-outbound: Supabase env vars are not configured');
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  try {
    const body: unknown = await request.json();
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    const payload = body as Record<string, unknown>;

    const url = clamp(payload.url, MAX_URL);
    if (!url || !isAllowedUrl(url)) {
      return NextResponse.json({ error: 'Invalid url' }, { status: 400 });
    }

    // created_at comes from the database default, not the client clock.
    const { error } = await supabase.from(TABLE).insert({
      site: clamp(payload.site, 64) ?? SITE,
      url,
      referrer: clamp(payload.referrer, MAX_REFERRER),
      user_agent: clamp(payload.userAgent, MAX_USER_AGENT),
    });

    if (error) {
      console.error('track-outbound insert error:', error.message);
      return NextResponse.json({ error: 'Failed to track click' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('track-outbound error:', error);
    return NextResponse.json({ error: 'Failed to track click' }, { status: 500 });
  }
}

function isAuthorized(request: NextRequest): boolean {
  const expected = process.env.CLICKS_ADMIN_TOKEN;
  if (!expected) return false;
  const header = request.headers.get('authorization') ?? '';
  const provided = header.startsWith('Bearer ') ? header.slice(7) : '';
  return provided.length > 0 && provided === expected;
}

export async function GET(request: NextRequest) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  try {
    const startOfToday = new Date();
    startOfToday.setUTCHours(0, 0, 0, 0);

    const [totalResult, todayResult, lastResult] = await Promise.all([
      supabase.from(TABLE).select('*', { count: 'exact', head: true }),
      supabase
        .from(TABLE)
        .select('*', { count: 'exact', head: true })
        .gte('created_at', startOfToday.toISOString()),
      supabase
        .from(TABLE)
        .select('created_at')
        .order('created_at', { ascending: false })
        .limit(1),
    ]);

    const firstError = totalResult.error ?? todayResult.error ?? lastResult.error;
    if (firstError) throw new Error(firstError.message);

    const stats = {
      total: totalResult.count ?? 0,
      today: todayResult.count ?? 0,
      lastClick: lastResult.data?.[0]?.created_at ?? null,
    };

    // Raw rows carry referrers and user agents, so they stay behind a token.
    if (!isAuthorized(request)) {
      return NextResponse.json(stats);
    }

    const { data: clicks, error } = await supabase
      .from(TABLE)
      .select('id, created_at, site, url, referrer, user_agent')
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) throw new Error(error.message);

    return NextResponse.json({ ...stats, clicks: clicks ?? [] });
  } catch (error) {
    console.error('track-outbound read error:', error);
    return NextResponse.json({ error: 'Failed to read clicks' }, { status: 500 });
  }
}
