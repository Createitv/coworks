import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
	const authToken = request.cookies.get('auth_token')
	const { pathname } = request.nextUrl

	// 如果已登录且访问登录页，重定向到首页
	if (authToken && pathname === '/login') {
		return NextResponse.redirect(new URL('/', request.url))
	}

	// 如果未登录且不是访问登录页或API，重定向到登录页
	if (!authToken && pathname !== '/login' && !pathname.startsWith('/api')) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		/*
		 * 匹配所有路径除了：
		 * - _next/static (静态文件)
		 * - _next/image (图片优化文件)
		 * - favicon.ico (网站图标)
		 * - public文件夹下的文件
		 */
		'/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)',
	],
}
