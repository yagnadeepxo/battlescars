// /app/api/cron/route.js (App Router version)
import { NextResponse } from 'next/server';

export async function GET(req) {
  const authHeader = req.headers.get('Authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Call your backend
  const response = await fetch('https://yagna-intern-backend.onrender.com/api/generate');
  const data = await response.json();

  return NextResponse.json({ success: true, data });
}
