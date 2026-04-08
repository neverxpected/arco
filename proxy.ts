import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload as { username: string; expiresAt: string };
  } catch {
    return null;
  }
}

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const sessionCookie = request.cookies.get('session')?.value;

  // Protect /staff-portal routes
  if (path.startsWith('/staff-portal')) {
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/staff-login', request.url));
    }

    const session = await verifyToken(sessionCookie);
    if (!session?.username) {
      // Clear invalid cookie and redirect
      const response = NextResponse.redirect(
        new URL('/staff-login', request.url)
      );
      response.cookies.delete('session');
      return response;
    }
  }

  // If user is already logged in and tries to visit /staff-login, redirect to portal
  if (path === '/staff-login' && sessionCookie) {
    const session = await verifyToken(sessionCookie);
    if (session?.username) {
      return NextResponse.redirect(new URL('/staff-portal', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/staff-portal/:path*', '/staff-login'],
};
