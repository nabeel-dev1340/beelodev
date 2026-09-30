import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPostSlugs,
} from '../../lib/blog';
import {
  generateMetadata as seo,
  generateBreadcrumbsSchema,
  siteUrl,
} from '../../lib/seo';
import BlogCard from '../../components/BlogCard';
import { automationServices } from '../../config/services';
import {
  Breadcrumbs,
  JsonLd,
  WorkflowCTA,
} from '../../components/PageElements';

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return (await getAllPostSlugs()).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return post
    ? seo({
        title: post.title,
        description: post.description,
        path: `/blog/${slug}`,
        image: post.coverImage.startsWith('http')
          ? post.coverImage
          : `${siteUrl}${post.coverImage}`,
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.updatedDate ?? post.date,
      })
    : { title: 'Guide not found', robots: { index: false } };
}
const mdxComponents = {
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
    href?.startsWith('http') ? (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    ) : (
      <Link href={href ?? '#'}>{children}</Link>
    ),
};
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post?.content) notFound();
  const related = await getRelatedPosts(slug, post.tags);
  const service = automationServices.find((item) => item.articleSlug === slug);
  return (
    <main id="main">
      <article className="article-container">
        <Breadcrumbs
          items={[
            { name: 'Blog', href: '/blog' },
            { name: post.tags[0] ?? 'Guide' },
          ]}
        />
        <header className="article-header">
          <p className="eyebrow">{post.tags[0]} · Practical guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <div className="article-meta">
            <Link href="/about">{post.author}</Link>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </time>
            <span>{post.readingTime}</span>
          </div>
        </header>
        {post.coverImage !== '/opengraph-image' && (
          <figure className="article-cover">
            <Image
              src={post.coverImage}
              alt={`Illustration for ${post.title}`}
              width={1200}
              height={630}
              priority
            />
          </figure>
        )}
        <div className="blog-content">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
        <WorkflowCTA service={service?.slug} />
        {related.length > 0 && (
          <section aria-label="Related guides">
            <h2 style={{ fontSize: '1.6rem', marginBottom: 25 }}>
              Keep reading.
            </h2>
            <div className="blog-grid">
              {related.map((item) => (
                <BlogCard key={item.slug} {...item} />
              ))}
            </div>
          </section>
        )}
      </article>
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${slug}` },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          author: {
            '@type': 'Person',
            name: post.author,
            url: `${siteUrl}/about`,
          },
          publisher: { '@id': `${siteUrl}#organization` },
          datePublished: post.date,
          dateModified: post.updatedDate ?? post.date,
          image: post.coverImage.startsWith('http')
            ? post.coverImage
            : `${siteUrl}${post.coverImage}`,
          mainEntityOfPage: `${siteUrl}/blog/${slug}`,
          inLanguage: 'en',
        }}
      />
    </main>
  );
}
