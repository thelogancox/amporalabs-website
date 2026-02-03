import { NextResponse } from 'next/server';
import { getBlogPerformance } from '@/lib/analytics';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '30daysAgo';

  try {
    const posts = await getBlogPerformance(period);

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Blog Analytics API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog analytics' },
      { status: 500 }
    );
  }
}
