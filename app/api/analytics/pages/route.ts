import { NextResponse } from 'next/server';
import { getTopPages } from '@/lib/analytics';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '7daysAgo';

  try {
    const pages = await getTopPages(period);
    return NextResponse.json({ pages });
  } catch (error) {
    console.error('Pages Analytics API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch page analytics' }, { status: 500 });
  }
}
