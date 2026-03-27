import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Handle click logging (best effort, no storage needed)
    if (body.type === 'click') {
      return NextResponse.json({ ok: true });
    }

    // Handle newsletter signup
    const { email } = body;
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { error } = await supabase
      .from('rhythmguitar_subscribers')
      .upsert({ email, source: 'website' }, { onConflict: 'email' });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { count, error } = await supabase
      .from('rhythmguitar_subscribers')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
