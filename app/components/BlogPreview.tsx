// Blog system — added for SEO

import Link from 'next/link';
import { getAllPosts } from '../lib/blog';
import BlogCard from './BlogCard';
import { ArrowUpRight } from 'lucide-react';

export default async function BlogPreview() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  if (recentPosts.length === 0) return null;

  return (
    <section className="py-16 sm:py-28 px-4 sm:px-6 relative" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-mono uppercase tracking-wider text-electric-blue mb-2">INSIGHTS</p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white">
              From the <span className="gradient-brand-text">Blog</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-electric-blue transition-opacity hover:opacity-80"
          >
            View all posts
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {recentPosts.map((post) => (
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
      </div>
    </section>
  );
}
