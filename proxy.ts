import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_ROUTES = ['/account', '/cart', '/checkout'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

  if (!isProtected) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get('JSESSIONID');

  if (!authCookie) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const response = await fetch(`http://localhost:8080/api/user`, {
      headers: {
        Cookie: request.headers.get('cookie') ?? '', // forward all cookies, not just one
        Accept: 'application/json',
      },
    });

    
    if (!response.ok) {
      
      if (response.status === 401 || response.status === 403) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
      }

      return NextResponse.redirect(new URL('/error?type=auth_down', request.url));
    
    }

    return NextResponse.next();
    
  } catch (error) {
    console.error('Auth verification failed:', error);
    return NextResponse.redirect(new URL('/error?type=auth_down', request.url));
  }
}

export const config = {
  matcher: [
    '/account/:path*',
    '/cart/:path*', 
    '/checkout/:path*'
  ],
};