import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coworks.dev'

const routes = ['', '/about', '/connect-me', '/privacy', '/terms', '/login', '/docs']

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date()

	return routes.map((path) => ({
		url: `${baseUrl}${path}`,
		lastModified,
	}))
}
