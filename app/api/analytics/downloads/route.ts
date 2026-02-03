import { NextResponse } from 'next/server';
import { getDownloadCount } from '@/lib/appStoreConnect';

export async function GET() {
  try {
    const data = await getDownloadCount();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Downloads API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch download data' },
      { status: 500 }
    );
  }
}
