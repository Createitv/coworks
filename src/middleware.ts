import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export const runtime = "nodejs";

const PUBLIC_PATHS = [
  "/",
  "/login",
  "/about",
  "/connect-me",
  "/privacy",
  "/terms",
  "/docs",
  "/sitemap.xml",
  "/favicon.ico",
];

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const originalQuery = request.nextUrl.search || "";

  const isAuthRoute = pathname.startsWith("/api/auth");
  const isLoginPage = pathname === "/login";
  const isPublicPath = PUBLIC_PATHS.includes(pathname);

  if (isAuthRoute || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (session && isLoginPage) {
    const redirectTarget = searchParams.get("callbackUrl") || "/";
    return NextResponse.redirect(new URL(redirectTarget, request.url));
  }

  if (!session && !isPublicPath) {
    const loginURL = new URL("/login", request.url);
    if (pathname && pathname !== "/") {
      loginURL.searchParams.set("callbackUrl", `${pathname}${originalQuery}`);
    }
    return NextResponse.redirect(loginURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)",
  ],
};
