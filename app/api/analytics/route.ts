import { NextResponse } from 'next/server';
import { getOverviewData, getTrafficSources } from '@/lib/analytics';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '7daysAgo';

  try {
    const [overview, sources] = await Promise.all([
      getOverviewData(period),
      getTrafficSources(period),
    ]);

    if (!overview) {
      return NextResponse.json(
        { error: 'Analytics not configured or unavailable' },
        { status: 503 }
      );
    }

    return NextResponse.json({
      overview,
      sources,
    });
  } catch (error) {
    console.error('Analytics API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
