import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://melodytech.my.id'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/super/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
