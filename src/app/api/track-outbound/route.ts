import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import path from 'path';

const TRACKING_FILE = path.join(process.cwd(), 'signalsmusic-clicks.json');

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Read existing data or create empty array
    let clicks = [];
    if (existsSync(TRACKING_FILE)) {
      try {
        const fileContent = readFileSync(TRACKING_FILE, 'utf8');
        clicks = JSON.parse(fileContent);
      } catch (e) {
        clicks = [];
      }
    }
    
    // Add new click
    clicks.push({
      ...data,
      id: Date.now() + '-' + Math.random().toString(36).substr(2, 9)
    });
    
    // Keep only last 1000 clicks to prevent file from growing too large
    if (clicks.length > 1000) {
      clicks = clicks.slice(-1000);
    }
    
    // Write back to file
    writeFileSync(TRACKING_FILE, JSON.stringify(clicks, null, 2));
    
    return NextResponse.json({ success: true, total: clicks.length });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ error: 'Failed to track click' }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (!existsSync(TRACKING_FILE)) {
      return NextResponse.json({ clicks: [], total: 0 });
    }
    
    const fileContent = readFileSync(TRACKING_FILE, 'utf8');
    const clicks = JSON.parse(fileContent);
    
    // Return summary stats
    const today = new Date().toISOString().split('T')[0];
    const todayClicks = clicks.filter((click: any) => 
      click.timestamp && click.timestamp.startsWith(today)
    );
    
    return NextResponse.json({
      total: clicks.length,
      today: todayClicks.length,
      lastClick: clicks[clicks.length - 1]?.timestamp || null,
      clicks: clicks.slice(-50) // Last 50 clicks for debugging
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read clicks' }, { status: 500 });
  }
}