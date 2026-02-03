import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const COOKIE_NAME = 'dashboard_session';
const LOGIN_PATH = '/dashboard/login';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /dashboard routes (except login page)
  if (pathname.startsWith('/dashboard') && pathname !== LOGIN_PATH) {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-change-me');
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      // Invalid or expired token - clear cookie and redirect
      const response = NextResponse.redirect(new URL(LOGIN_PATH, request.url));
      response.cookies.delete(COOKIE_NAME);
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
