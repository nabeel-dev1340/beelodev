// Blog system — added for SEO

import Link from 'next/link';
import { getAllPosts } from '../lib/blog';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';
import BlogCard from '../components/BlogCard';

export const metadata = generateSEOMetadata({
  title: 'Automation Insights — Blog',
  description:
    'Practical guides, case studies, and automation strategies for small and mid-sized businesses. Learn how to cut costs and scale with AI.',
  path: '/blog',
  keywords: ['automation blog', 'AI support', 'business automation', 'cost reduction', 'SMB automation'],
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const breadcrumbSchema = generateBreadcrumbsSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  // SEO: ItemList + CollectionPage schema for blog listing rich results
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Automation Insights — Beelodev Blog',
    description: 'Practical guides, case studies, and automation strategies for small and mid-sized businesses.',
    url: `${siteUrl}/blog`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-xs text-neutral-500">
              <li>
                <Link href="/" className="hover:text-neutral-300 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-neutral-700">
                /
              </li>
              <li className="text-neutral-400">Blog</li>
            </ol>
          </nav>

          <div className="mb-12 sm:mb-16">
            <p className="text-xs font-mono uppercase tracking-wider text-electric-blue mb-4">Blog</p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Automation Insights
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl">
              Practical guides and case studies for businesses ready to scale without hiring.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
              <p className="text-neutral-400">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  author={post.author}
                  readingTime={post.readingTime}
                  tags={post.tags}
                  coverImage={post.coverImage}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
