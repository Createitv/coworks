import type { MetadataRoute } from 'next'
import { getDocSlugs } from '@/lib/markdown'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coworks.dev'

const routes = ['', '/about', '/connect-me', '/privacy', '/terms', '/login', '/docs']

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date()

	// Get all doc slugs dynamically
	const docSlugs = getDocSlugs()
	const docRoutes = docSlugs.map((slug) => `/docs/${slug}`)

	// Combine all routes
	const allRoutes = [...routes, ...docRoutes]

	return allRoutes.map((path) => ({
		url: `${baseUrl}${path}`,
		lastModified,
	}))
}
