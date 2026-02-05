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
  previousPageViews: number;
  previousVisitors: number;
  previousSessions: number;
  previousBounceRate: number;
  previousAvgSessionDuration: number;
  previousNewUsers: number;
  dailyData: Array<{
    date: string;
    pageViews: number;
    visitors: number;
  }>;
}

export interface PageData {
  path: string;
  title: string;
  pageViews: number;
  avgDuration: number;
  engagementRate: number;
}

export interface DeviceData {
  device: string;
  sessions: number;
  percentage: number;
}

export interface GeoData {
  country: string;
  sessions: number;
  users: number;
  percentage: number;
}

export interface AppStoreClickData {
  totalClicks: number;
  dailyClicks: Array<{
    date: string;
    clicks: number;
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

const DAYS_MAP: Record<string, number> = {
  'today': 1, 'yesterday': 1, '7daysAgo': 7, '14daysAgo': 14, '30daysAgo': 30, '90daysAgo': 90,
};

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
    const days = DAYS_MAP[startDate] || 7;
    const prevStart = `${days * 2}daysAgo`;
    const prevEnd = `${days + 1}daysAgo`;

    const [[totalsResponse], [dailyResponse]] = await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
          { startDate, endDate: 'today' },
          { startDate: prevStart, endDate: prevEnd },
        ],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
          { name: 'newUsers' },
        ],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate: 'today' }],
        dimensions: [{ name: 'date' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'activeUsers' },
        ],
        orderBys: [{ dimension: { dimensionName: 'date' } }],
      }),
    ]);

    const current = totalsResponse.rows?.[0]?.metricValues || [];
    const previous = totalsResponse.rows?.[1]?.metricValues || [];
    const dailyData = (dailyResponse.rows || []).map((row) => ({
      date: row.dimensionValues?.[0]?.value || '',
      pageViews: parseInt(row.metricValues?.[0]?.value || '0', 10),
      visitors: parseInt(row.metricValues?.[1]?.value || '0', 10),
    }));

    const data: AnalyticsData = {
      pageViews: parseInt(current[0]?.value || '0', 10),
      visitors: parseInt(current[1]?.value || '0', 10),
      sessions: parseInt(current[2]?.value || '0', 10),
      bounceRate: parseFloat(current[3]?.value || '0'),
      avgSessionDuration: parseFloat(current[4]?.value || '0'),
      newUsers: parseInt(current[5]?.value || '0', 10),
      previousPageViews: parseInt(previous[0]?.value || '0', 10),
      previousVisitors: parseInt(previous[1]?.value || '0', 10),
      previousSessions: parseInt(previous[2]?.value || '0', 10),
      previousBounceRate: parseFloat(previous[3]?.value || '0'),
      previousAvgSessionDuration: parseFloat(previous[4]?.value || '0'),
      previousNewUsers: parseInt(previous[5]?.value || '0', 10),
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
    throw error;
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

export async function getTopPages(startDate: string = '7daysAgo'): Promise<PageData[]> {
  const cacheKey = `top-pages-${startDate}`;
  const cached = getCached<PageData[]>(cacheKey);
  if (cached) return cached;

  const client = getAnalyticsClient();
  const propertyId = process.env.GA_PROPERTY_ID;
  if (!client || !propertyId) return [];

  try {
    const [response] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'engagementRate' },
      ],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 20,
    });

    const pages: PageData[] = (response.rows || []).map((row) => ({
      path: row.dimensionValues?.[0]?.value || '',
      title: row.dimensionValues?.[1]?.value || 'Untitled',
      pageViews: parseInt(row.metricValues?.[0]?.value || '0', 10),
      avgDuration: parseFloat(row.metricValues?.[1]?.value || '0'),
      engagementRate: parseFloat(row.metricValues?.[2]?.value || '0'),
    }));

    setCache(cacheKey, pages);
    return pages;
  } catch (error) {
    console.error('GA4 Top Pages Error:', error);
    return [];
  }
}

export async function getDeviceBreakdown(startDate: string = '7daysAgo'): Promise<DeviceData[]> {
  const cacheKey = `devices-${startDate}`;
  const cached = getCached<DeviceData[]>(cacheKey);
  if (cached) return cached;

  const client = getAnalyticsClient();
  const propertyId = process.env.GA_PROPERTY_ID;
  if (!client || !propertyId) return [];

  try {
    const [response] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: 'today' }],
      dimensions: [{ name: 'deviceCategory' }],
      metrics: [{ name: 'sessions' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    });

    const totalSessions = (response.rows || []).reduce(
      (sum, row) => sum + parseInt(row.metricValues?.[0]?.value || '0', 10), 0
    );

    const devices: DeviceData[] = (response.rows || []).map((row) => {
      const sessions = parseInt(row.metricValues?.[0]?.value || '0', 10);
      return {
        device: row.dimensionValues?.[0]?.value || 'Unknown',
        sessions,
        percentage: totalSessions > 0 ? (sessions / totalSessions) * 100 : 0,
      };
    });

    setCache(cacheKey, devices);
    return devices;
  } catch (error) {
    console.error('GA4 Device Breakdown Error:', error);
    return [];
  }
}

export async function getGeographicBreakdown(startDate: string = '7daysAgo'): Promise<GeoData[]> {
  const cacheKey = `geo-${startDate}`;
  const cached = getCached<GeoData[]>(cacheKey);
  if (cached) return cached;

  const client = getAnalyticsClient();
  const propertyId = process.env.GA_PROPERTY_ID;
  if (!client || !propertyId) return [];

  try {
    const [response] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: 'today' }],
      dimensions: [{ name: 'country' }],
      metrics: [{ name: 'sessions' }, { name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10,
    });

    const totalSessions = (response.rows || []).reduce(
      (sum, row) => sum + parseInt(row.metricValues?.[0]?.value || '0', 10), 0
    );

    const geo: GeoData[] = (response.rows || []).map((row) => {
      const sessions = parseInt(row.metricValues?.[0]?.value || '0', 10);
      return {
        country: row.dimensionValues?.[0]?.value || 'Unknown',
        sessions,
        users: parseInt(row.metricValues?.[1]?.value || '0', 10),
        percentage: totalSessions > 0 ? (sessions / totalSessions) * 100 : 0,
      };
    });

    setCache(cacheKey, geo);
    return geo;
  } catch (error) {
    console.error('GA4 Geographic Breakdown Error:', error);
    return [];
  }
}

export async function getRealtimeUsers(): Promise<number> {
  const cacheKey = 'realtime-users';
  const cached = getCached<number>(cacheKey);
  if (cached !== null && cached !== undefined) return cached;

  const client = getAnalyticsClient();
  const propertyId = process.env.GA_PROPERTY_ID;
  if (!client || !propertyId) return 0;

  try {
    const [response] = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: 'activeUsers' }],
    });

    const count = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0', 10);
    setCache(cacheKey, count, 30 * 1000);
    return count;
  } catch (error) {
    console.error('GA4 Realtime Error:', error);
    return 0;
  }
}

export async function getAppStoreClicks(startDate: string = '7daysAgo'): Promise<AppStoreClickData> {
  const cacheKey = `app-store-clicks-${startDate}`;
  const cached = getCached<AppStoreClickData>(cacheKey);
  if (cached) return cached;

  const client = getAnalyticsClient();
  const propertyId = process.env.GA_PROPERTY_ID;
  if (!client || !propertyId) {
    return { totalClicks: 0, dailyClicks: [] };
  }

  try {
    const [[totalResponse], [dailyResponse]] = await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate: 'today' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            stringFilter: { matchType: 'EXACT', value: 'download_click' },
          },
        },
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate, endDate: 'today' }],
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            stringFilter: { matchType: 'EXACT', value: 'download_click' },
          },
        },
        orderBys: [{ dimension: { dimensionName: 'date' } }],
      }),
    ]);

    const totalClicks = parseInt(totalResponse.rows?.[0]?.metricValues?.[0]?.value || '0', 10);
    const dailyClicks = (dailyResponse.rows || []).map((row) => ({
      date: row.dimensionValues?.[0]?.value || '',
      clicks: parseInt(row.metricValues?.[0]?.value || '0', 10),
    }));

    const data: AppStoreClickData = { totalClicks, dailyClicks };
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error('GA4 App Store Clicks Error:', error);
    return { totalClicks: 0, dailyClicks: [] };
  }
}
