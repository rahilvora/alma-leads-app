import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware to check if user is authenticated
// In Next.js, middleware allows you to modify requests and responses before they are sent to the client
export function middleware(request: NextRequest) {
  // Mock authentication check to check auth-session cookie
  const isAuthenticated = request.cookies.get('auth-session')

  // If accessing dashboard routes without auth, redirect to login
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: '/dashboard/:path*'
} 