'use client';

import { useState } from 'react';
import type { BlogPost } from '../lib/blog';
import BlogCard from './BlogCard';

type Post = Omit<BlogPost, 'content'>;
export default function BlogExplorer({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('All guides');
  const topics = ['All guides', ...new Set(posts.map((post) => post.tags[0]).filter(Boolean))];
  const filtered = posts.filter(
    (post) =>
      (topic === 'All guides' || post.tags[0] === topic) &&
      `${post.title} ${post.description} ${post.tags.join(' ')}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <div>
      <div className="blog-tools">
        <label className="search-field">
          Find a practical guide
          <input
            className="search-input"
            type="search"
            placeholder="Search downloads, exports, portals…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="filter-buttons" role="group" aria-label="Filter guides by topic">
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              className="filter-button"
              aria-pressed={topic === item}
              onClick={() => setTopic(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="results-note" role="status">
        {filtered.length} {filtered.length === 1 ? 'guide' : 'guides'}
        {topic !== 'All guides' ? ` about ${topic.toLowerCase()}` : ''}
      </p>
      {filtered.length ? (
        <div className="blog-grid">
          {filtered.map((post) => (
            <BlogCard key={post.slug} {...post} headingLevel="h2" />
          ))}
        </div>
      ) : (
        <div className="output-sample">
          <h2>No matching guides.</h2>
          <p>Try a broader search or choose another topic.</p>
          <button
            type="button"
            className="button button-small"
            onClick={() => {
              setQuery('');
              setTopic('All guides');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
