import { MetadataRoute } from 'next';
import { siteUrl } from './lib/seo';
import { projects } from './config/projects';
import { systemSlugs } from './config/systems';
import { getAllPosts } from './lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteUrl;
  const currentDate = new Date().toISOString();
  const blogPosts = await getAllPosts();

  // SEO: Sitemap ordered by conversion funnel importance with optimized priority/changefreq
  const routes: MetadataRoute.Sitemap = [
    // 1. Homepage — highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // 2. Core conversion pages — systems (product pages)
    {
      url: `${baseUrl}/systems`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    ...systemSlugs.map((slug) => ({
      url: `${baseUrl}/systems/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // 3. High-intent landing pages — cost calculators
    {
      url: `${baseUrl}/support-cost-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/invoice-processing-cost-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/document-intelligence-cost-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    // 4. Blog — content hub for organic traffic
    {
      url: `${baseUrl}/blog`,
      lastModified: blogPosts[0]?.date ? new Date(blogPosts[0].date).toISOString() : currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    // 5. Portfolio — case studies (featured = higher priority)
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: project.featured ? 0.85 : 0.7,
    })),
    // 6. Supporting pages — lower priority
    {
      url: `${baseUrl}/process`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sitemap-page`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    },
  ];

  return routes;
}
