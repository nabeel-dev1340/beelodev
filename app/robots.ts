import { MetadataRoute } from 'next';
import { siteUrl } from './lib/seo';

// LLM SEO: AI crawlers explicitly allowed for discoverability by ChatGPT, Perplexity, Claude, etc.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard search engine crawlers
      {
        userAgent: '*',
        allow: ['/', '/_next/image'],
        disallow: [
          '/api/', // Never expose API routes
          '/_next/static/',
          '/_next/data/',
          '/admin/', // Admin pages if any
          '/*.json$', // JSON data files
          '/private/', // Any private routes
        ],
      },
      // Explicitly allow major search engines with no restrictions
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // AI crawlers — important for LLM SEO
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
