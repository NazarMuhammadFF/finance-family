import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getCurrentSession } from "@/lib/auth";

const protectedRoutes = [
  "/dashboard",
  "/bisnis",
  "/pemasukan",
  "/pengeluaran",
  "/laporan",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const shouldProtect = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (!shouldProtect) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get("sb-access-token")?.value;
  const refreshToken = request.cookies.get("sb-refresh-token")?.value;

  if (!accessToken && !refreshToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const session = await getCurrentSession();

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/bisnis/:path*",
    "/pemasukan/:path*",
    "/pengeluaran/:path*",
    "/laporan/:path*",
  ],
};
