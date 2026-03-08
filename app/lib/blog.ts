// Blog system — added for SEO

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDir = path.join(process.cwd(), 'content', 'blog');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage: string;
  readingTime: string;
  content?: string;
};

type Frontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage: string;
  slug: string;
};

function parseFrontmatter(filePath: string, rawContent: string): Frontmatter & { content: string } {
  const { data, content } = matter(rawContent);
  return {
    title: data.title ?? 'Untitled',
    description: data.description ?? '',
    date: data.date ?? '',
    author: data.author ?? 'Beelodev',
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage ?? '/blog/covers/placeholder.jpg',
    slug: data.slug ?? path.basename(filePath, '.mdx'),
    content,
  };
}

/** Returns all blog posts sorted by date (newest first). */
export async function getAllPosts(): Promise<Omit<BlogPost, 'content'>[]> {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));
  const posts: Omit<BlogPost, 'content'>[] = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseFrontmatter(filePath, rawContent);
    const stats = readingTime(parsed.content);

    posts.push({
      slug: parsed.slug,
      title: parsed.title,
      description: parsed.description,
      date: parsed.date,
      author: parsed.author,
      tags: parsed.tags,
      coverImage: parsed.coverImage,
      readingTime: `${Math.ceil(stats.minutes)} min read`,
    });
  }

  return posts.sort((a, b) => (b.date > a.date ? 1 : -1));
}

/** Returns full post content + frontmatter for a given slug. */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!fs.existsSync(contentDir)) {
    return null;
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseFrontmatter(filePath, rawContent);

    if (parsed.slug !== slug) continue;

    const stats = readingTime(parsed.content);

    return {
      slug: parsed.slug,
      title: parsed.title,
      description: parsed.description,
      date: parsed.date,
      author: parsed.author,
      tags: parsed.tags,
      coverImage: parsed.coverImage,
      readingTime: `${Math.ceil(stats.minutes)} min read`,
      content: parsed.content,
    };
  }

  return null;
}

/** Returns up to 3 related posts sharing tags with the current post. */
export async function getRelatedPosts(
  currentSlug: string,
  tags: string[]
): Promise<Omit<BlogPost, 'content'>[]> {
  const allPosts = await getAllPosts();
  const current = allPosts.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const scored = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const sharedTags = p.tags.filter((t) => tags.includes(t));
      return { post: p, score: sharedTags.length };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map((s) => s.post);
}

/** Returns all blog slugs for generateStaticParams. */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
