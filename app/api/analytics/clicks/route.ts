import { NextResponse } from 'next/server';
import { getAppStoreClicks } from '@/lib/analytics';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '7daysAgo';

  try {
    const clicks = await getAppStoreClicks(period);
    return NextResponse.json(clicks);
  } catch (error) {
    console.error('Clicks Analytics API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch click analytics' }, { status: 500 });
  }
}
