import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { getCached, setCache } from './cache';

let analyticsClient: BetaAnalyticsDataClient | null = null;

function getAnalyticsClient(): BetaAnalyticsDataClient | null {
  if (analyticsClient) return analyticsClient;

  const clientEmail = process.env.GA_CLIENT_EMAIL;
  let privateKey = process.env.GA_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    console.warn('GA4 credentials not configured:', {
      hasEmail: !!clientEmail,
      hasKey: !!privateKey,
      propertyId: process.env.GA_PROPERTY_ID
    });
    return null;
  }

  // Handle both escaped newlines (\n as string) and actual newlines
  if (privateKey.includes('\\n')) {
    privateKey = privateKey.replace(/\\n/g, '\n');
  }

  analyticsClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  });

  return analyticsClient;
}

export interface AnalyticsData {
  pageViews: number;
  visitors: number;
  sessions: number;
  bounceRate: number;
  avgSessionDuration: number;
  newUsers: number;
  dailyData: Array<{
    date: string;
    pageViews: number;
    visitors: number;
  }>;
}

export interface TrafficSource {
  source: string;
  sessions: number;
  percentage: number;
}

export interface BlogPost {
  path: string;
  title: string;
  pageViews: number;
  avgDuration: number;
  engagementRate: number;
}

export async function getOverviewData(startDate: string = '7daysAgo'): Promise<AnalyticsData | null> {
  const cacheKey = `overview-${startDate}`;
  const cached = getCached<AnalyticsData>(cacheKey);
  if (cached) return cached;

  const client = getAnalyticsClient();
  const propertyId = process.env.GA_PROPERTY_ID;

  if (!client || !propertyId) {
    return null;
  }

  try {
    // Get totals
    const [totalsResponse] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: 'today' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'bounceRate' },
        { name: 'averageSessionDuration' },
        { name: 'newUsers' },
      ],
    });

    // Get daily breakdown
    const [dailyResponse] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: 'today' }],
      dimensions: [{ name: 'date' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' },
      ],
      orderBys: [{ dimension: { dimensionName: 'date' } }],
    });

    const totals = totalsResponse.rows?.[0]?.metricValues || [];
    const dailyData = (dailyResponse.rows || []).map((row) => ({
      date: row.dimensionValues?.[0]?.value || '',
      pageViews: parseInt(row.metricValues?.[0]?.value || '0', 10),
      visitors: parseInt(row.metricValues?.[1]?.value || '0', 10),
    }));

    const data: AnalyticsData = {
      pageViews: parseInt(totals[0]?.value || '0', 10),
      visitors: parseInt(totals[1]?.value || '0', 10),
      sessions: parseInt(totals[2]?.value || '0', 10),
      bounceRate: parseFloat(totals[3]?.value || '0'),
      avgSessionDuration: parseFloat(totals[4]?.value || '0'),
      newUsers: parseInt(totals[5]?.value || '0', 10),
      dailyData,
    };

    setCache(cacheKey, data);
    return data;
  } catch (error: unknown) {
    const err = error as Error & { code?: string; details?: string };
    console.error('GA4 API Error:', {
      message: err.message,
      code: err.code,
      details: err.details,
    });
    throw error; // Re-throw so we can see the error in the response
  }
}

export async function getTrafficSources(startDate: string = '7daysAgo'): Promise<TrafficSource[]> {
  const cacheKey = `sources-${startDate}`;
  const cached = getCached<TrafficSource[]>(cacheKey);
  if (cached) return cached;

  const client = getAnalyticsClient();
  const propertyId = process.env.GA_PROPERTY_ID;

  if (!client || !propertyId) {
    return [];
  }

  try {
    const [response] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: 'today' }],
      dimensions: [{ name: 'sessionSource' }],
      metrics: [{ name: 'sessions' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10,
    });

    const totalSessions = (response.rows || []).reduce(
      (sum, row) => sum + parseInt(row.metricValues?.[0]?.value || '0', 10),
      0
    );

    const sources: TrafficSource[] = (response.rows || []).map((row) => {
      const sessions = parseInt(row.metricValues?.[0]?.value || '0', 10);
      return {
        source: row.dimensionValues?.[0]?.value || 'Unknown',
        sessions,
        percentage: totalSessions > 0 ? (sessions / totalSessions) * 100 : 0,
      };
    });

    setCache(cacheKey, sources);
    return sources;
  } catch (error) {
    console.error('GA4 Traffic Sources Error:', error);
    return [];
  }
}

export async function getBlogPerformance(startDate: string = '30daysAgo'): Promise<BlogPost[]> {
  const cacheKey = `blog-${startDate}`;
  const cached = getCached<BlogPost[]>(cacheKey);
  if (cached) return cached;

  const client = getAnalyticsClient();
  const propertyId = process.env.GA_PROPERTY_ID;

  if (!client || !propertyId) {
    return [];
  }

  try {
    const [response] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: 'today' }],
      dimensions: [
        { name: 'pagePath' },
        { name: 'pageTitle' },
      ],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'engagementRate' },
      ],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: {
            matchType: 'CONTAINS',
            value: '/blog/',
          },
        },
      },
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 20,
    });

    const posts: BlogPost[] = (response.rows || [])
      .filter((row) => {
        const path = row.dimensionValues?.[0]?.value || '';
        // Exclude the main /blog page, only show individual posts
        return path !== '/blog' && path !== '/blog/';
      })
      .map((row) => ({
        path: row.dimensionValues?.[0]?.value || '',
        title: row.dimensionValues?.[1]?.value || 'Untitled',
        pageViews: parseInt(row.metricValues?.[0]?.value || '0', 10),
        avgDuration: parseFloat(row.metricValues?.[1]?.value || '0'),
        engagementRate: parseFloat(row.metricValues?.[2]?.value || '0'),
      }));

    setCache(cacheKey, posts);
    return posts;
  } catch (error) {
    console.error('GA4 Blog Performance Error:', error);
    return [];
  }
}
