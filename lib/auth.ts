import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-change-me');
const COOKIE_NAME = 'dashboard_session';

export interface SessionPayload {
  authenticated: boolean;
  iat: number;
  exp: number;
}

export async function verifyPassword(password: string): Promise<boolean> {
  const hash = process.env.DASHBOARD_PASSWORD_HASH;
  if (!hash) {
    console.error('DASHBOARD_PASSWORD_HASH not set');
    return false;
  }
  return bcrypt.compare(password, hash);
}

export async function createSessionToken(): Promise<string> {
  const token = await new SignJWT({ authenticated: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET);

  return token;
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export function getSessionCookieOptions() {
  return {
    name: COOKIE_NAME,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  };
}

export { COOKIE_NAME };
