import Link from 'next/link';
import { siteConfig } from '../config/site';
import { projects } from '../config/projects';
import { systemSlugs } from '../config/systems';
import { getAllPosts } from '../lib/blog';
import { generateMetadata as generateSEOMetadata } from '../lib/seo';

// LLM SEO: HTML sitemap for AI and user navigation
export const metadata = generateSEOMetadata({
  title: 'Site Index — All Pages',
  description: 'Complete sitemap of Beelodev. Find systems, projects, calculators, blog, and contact.',
  path: '/sitemap-page',
  noIndex: true,
});

export default async function SitemapPage() {
  const posts = await getAllPosts();

  const systemLinks = systemSlugs.map((slug) => {
    const system = siteConfig.automationSystems.systems.find((s) => s.slug === slug);
    return { href: `/systems/${slug}`, label: system?.name ?? slug };
  });

  return (
    <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">Site Index</h1>
        <p className="text-neutral-400 text-sm mb-10">
          All pages on beelodev.com — for humans and AI assistants.
        </p>

        <section className="mb-10">
          <h2 className="font-display text-xl font-bold text-white mb-4">Main</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-electric-blue hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-electric-blue hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/systems" className="text-electric-blue hover:underline">
                Systems
              </Link>
            </li>
            <li>
              <Link href="/process" className="text-electric-blue hover:underline">
                Process
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-electric-blue hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-xl font-bold text-white mb-4">Automation Systems</h2>
          <ul className="space-y-2">
            {systemLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-electric-blue hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-xl font-bold text-white mb-4">Free Calculators</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/support-cost-calculator" className="text-electric-blue hover:underline">
                Customer Support Cost Calculator
              </Link>
            </li>
            <li>
              <Link href="/invoice-processing-cost-calculator" className="text-electric-blue hover:underline">
                Invoice Processing Cost Calculator
              </Link>
            </li>
            <li>
              <Link href="/document-intelligence-cost-calculator" className="text-electric-blue hover:underline">
                Document Intelligence Cost Calculator
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-xl font-bold text-white mb-4">Case Studies</h2>
          <ul className="space-y-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="text-electric-blue hover:underline">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-xl font-bold text-white mb-4">Blog Posts</h2>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-electric-blue hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>
              <a
                href={siteConfig.personal.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-blue hover:underline"
              >
                Book a Free Discovery Call
              </a>
            </li>
            <li>
              <a href="mailto:support@beelodev.com" className="text-electric-blue hover:underline">
                support@beelodev.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
