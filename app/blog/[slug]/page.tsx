// Blog system — added for SEO

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, Calendar } from 'lucide-react';
import { getPostBySlug, getRelatedPosts, getAllPostSlugs } from '../../lib/blog';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../../lib/seo';
import BlogCard from '../../components/BlogCard';
import BlogCTA from '../../components/BlogCTA';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found', robots: { index: false, follow: false } };
  }

  const path = `/blog/${slug}`;
  const fullTitle = `${post.title} | Beelodev Blog`;
  const imageUrl = post.coverImage.startsWith('http') ? post.coverImage : `${siteUrl}${post.coverImage}`;

  return generateSEOMetadata({
    title: fullTitle,
    description: post.description,
    path,
    image: imageUrl,
    type: 'article',
    publishedTime: post.date,
  });
}

const mdxComponents = {
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href ?? '#'} className="text-electric-blue hover:underline">
        {children}
      </Link>
    );
  },
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-neutral-300 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-neutral-300 space-y-2 mb-6" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-neutral-300 space-y-2 mb-6" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-electric-blue pl-4 py-2 my-4 text-neutral-400 italic"
      {...props}
    />
  ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.content) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.tags);
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const breadcrumbSchema = generateBreadcrumbsSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Beelodev',
      url: siteUrl,
    },
    datePublished: post.date,
    image: post.coverImage.startsWith('http') ? post.coverImage : `${siteUrl}${post.coverImage}`,
    url: `${siteUrl}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="min-h-screen py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-xs text-neutral-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-neutral-300 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-neutral-700">
                /
              </li>
              <li>
                <Link href="/blog" className="hover:text-neutral-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-neutral-700">
                /
              </li>
              <li className="text-neutral-400 truncate max-w-[200px] sm:max-w-none">{post.title}</li>
            </ol>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] max-h-[400px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium"
                style={{
                  backgroundColor: 'rgba(14,165,233,0.15)',
                  color: '#0ea5e9',
                  border: '1px solid rgba(14,165,233,0.25)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-10">
            <span className="font-medium text-neutral-300">{post.author}</span>
            <span>{formattedDate}</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="prose prose-invert max-w-none blog-content">
            <MDXRemote source={post.content!} components={mdxComponents} />
          </div>

          <hr className="border-white/10 my-12" />

          <div className="mb-12">
            <BlogCTA />
          </div>

          {relatedPosts.length > 0 && (
            <section aria-label="Related posts" className="mt-12">
              <h2 className="font-display text-xl font-bold text-white mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedPosts.map((p) => (
                  <BlogCard
                    key={p.slug}
                    slug={p.slug}
                    title={p.title}
                    description={p.description}
                    date={p.date}
                    author={p.author}
                    readingTime={p.readingTime}
                    tags={p.tags}
                    coverImage={p.coverImage}
                  />
                ))}
              </div>
            </section>
          )}

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mt-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
