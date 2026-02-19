import { MetadataRoute } from 'next';
import { siteUrl } from './lib/seo';
import { projects } from './config/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  const currentDate = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Individual project case-study pages — most content-rich URLs
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: project.featured ? 0.9 : 0.7,
    })),
  ];

  return routes;
}
