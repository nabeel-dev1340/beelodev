import { MetadataRoute } from 'next';
import { siteUrl } from './lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/image'],
        disallow: ['/api/', '/_next/static/', '/_next/data/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
