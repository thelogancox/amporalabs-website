import jwt from 'jsonwebtoken';
import { getCached, setCache } from './cache';

interface DownloadData {
  totalDownloads: number;
  lastUpdated: string;
  error?: string;
}

function generateAppStoreToken(): string | null {
  const keyId = process.env.APP_STORE_CONNECT_KEY_ID;
  const issuerId = process.env.APP_STORE_CONNECT_ISSUER_ID;
  const privateKey = process.env.APP_STORE_CONNECT_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!keyId || !issuerId || !privateKey) {
    return null;
  }

  const now = Math.floor(Date.now() / 1000);

  const token = jwt.sign(
    {
      iss: issuerId,
      iat: now,
      exp: now + 20 * 60, // 20 minutes
      aud: 'appstoreconnect-v1',
    },
    privateKey,
    {
      algorithm: 'ES256',
      header: {
        alg: 'ES256',
        kid: keyId,
        typ: 'JWT',
      },
    }
  );

  return token;
}

export async function getDownloadCount(): Promise<DownloadData> {
  const cacheKey = 'app-downloads';
  const cached = getCached<DownloadData>(cacheKey);
  if (cached) return cached;

  const token = generateAppStoreToken();
  const appId = process.env.APP_ID;

  if (!token || !appId) {
    return {
      totalDownloads: 0,
      lastUpdated: new Date().toISOString(),
      error: 'App Store Connect not configured',
    };
  }

  try {
    // Get app info to verify connection
    const appResponse = await fetch(
      `https://api.appstoreconnect.apple.com/v1/apps/${appId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!appResponse.ok) {
      const errorText = await appResponse.text();
      console.error('App Store Connect Error:', errorText);
      return {
        totalDownloads: 0,
        lastUpdated: new Date().toISOString(),
        error: 'Failed to connect to App Store Connect',
      };
    }

    // Note: Getting actual download counts requires Sales Reports API
    // which returns gzipped TSV files that need special parsing.
    // For now, we'll return a placeholder and can enhance this later.

    // The Analytics Reports API is complex and requires:
    // 1. Creating a report request
    // 2. Waiting for it to be generated
    // 3. Fetching the report data

    // For MVP, we'll indicate the connection is working
    // and you can manually update or enhance this endpoint

    const data: DownloadData = {
      totalDownloads: 0, // Will be populated when Sales Reports are integrated
      lastUpdated: new Date().toISOString(),
    };

    // Cache for 1 hour since download data doesn't change frequently
    setCache(cacheKey, data, 60 * 60 * 1000);
    return data;
  } catch (error) {
    console.error('App Store Connect Error:', error);
    return {
      totalDownloads: 0,
      lastUpdated: new Date().toISOString(),
      error: 'Failed to fetch download data',
    };
  }
}
