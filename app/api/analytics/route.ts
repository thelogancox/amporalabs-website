import { NextResponse } from 'next/server';
import { getOverviewData, getTrafficSources, getDeviceBreakdown, getGeographicBreakdown, getRealtimeUsers, getSourceMediumBreakdown, getCampaignPerformance } from '@/lib/analytics';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '7daysAgo';

  try {
    const [overview, sources, devices, geo, realtimeUsers, sourceMedium, campaigns] = await Promise.all([
      getOverviewData(period),
      getTrafficSources(period),
      getDeviceBreakdown(period),
      getGeographicBreakdown(period),
      getRealtimeUsers(),
      getSourceMediumBreakdown(period),
      getCampaignPerformance(period),
    ]);

    if (!overview) {
      return NextResponse.json(
        {
          error: 'Analytics not configured or unavailable',
          debug: {
            hasPropertyId: !!process.env.GA_PROPERTY_ID,
            hasClientEmail: !!process.env.GA_CLIENT_EMAIL,
            hasPrivateKey: !!process.env.GA_PRIVATE_KEY,
          }
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      overview,
      sources,
      devices,
      geo,
      realtimeUsers,
      sourceMedium,
      campaigns,
    });
  } catch (error: unknown) {
    const err = error as Error & { code?: string; details?: string };
    console.error('Analytics API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch analytics',
        message: err.message,
        code: err.code,
      },
      { status: 500 }
    );
  }
}
