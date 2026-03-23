// Blog system — added for SEO

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type BlogCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
  coverImage: string;
};

export default function BlogCard({
  slug,
  title,
  description,
  date,
  author,
  readingTime,
  tags,
  coverImage,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgb(var(--brand-blue)/0.12)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-electric-blue/15 text-electric-blue border border-electric-blue/25"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-display text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-electric-blue transition-colors">
          {title}
        </h2>
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">{description}</p>
        <div className="flex items-center justify-between text-xs text-neutral-500 mt-auto">
          <span>
            {author} · {formattedDate} · {readingTime}
          </span>
          <span className="inline-flex items-center gap-1 text-electric-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read Article
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
