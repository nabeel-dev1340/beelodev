import type { MetadataRoute } from 'next';
import { siteUrl } from './lib/seo';
import { projects } from './config/projects';
import { automationServices } from './config/services';
import { systemSlugs } from './config/systems';
import { getAllPosts } from './lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const paths = [
    '',
    '/services',
    '/projects',
    '/process',
    '/about',
    '/contact',
    '/blog',
    '/systems',
    '/privacy',
    '/sitemap-page',
    '/support-cost-calculator',
    '/invoice-processing-cost-calculator',
    '/document-intelligence-cost-calculator',
  ];
  return [
    ...paths.map((path) => ({ url: `${siteUrl}${path}` })),
    ...automationServices.map((service) => ({ url: `${siteUrl}/services/${service.slug}` })),
    ...systemSlugs.map((slug) => ({ url: `${siteUrl}/systems/${slug}` })),
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}` })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedDate ?? post.date),
    })),
  ];
}
