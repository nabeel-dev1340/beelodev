import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '../lib/blog';

export default function BlogCard({
  slug,
  title,
  description,
  date,
  readingTime,
  tags,
  headingLevel = 'h3',
}: Omit<BlogPost, 'content'> & { headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;
  return (
    <Link className="blog-card" href={`/blog/${slug}`}>
      <p className="project-kicker">{tags[0] ?? 'Practical guide'}</p>
      <Heading>{title}</Heading>
      <p>{description}</p>
      <div className="blog-card-meta">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
          })}
        </time>
        <span aria-hidden="true">·</span>
        <span>{readingTime}</span>
      </div>
      <span className="text-link">
        Read the guide <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}
