import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { systems } from '../config/systems';
import { siteConfig } from '../config/site';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';

// SEO: keyword optimization
export const metadata = generateSEOMetadata({
  title: 'Automation Systems — AI Support, Invoice & Document Intelligence',
  description:
    'Choose from 4 AI automation systems for small business: AI Support Agent ($1099), Invoice Processing ($1299), Document Intelligence ($1999), AI Website Chatbot ($899). Book a free call.',
  path: '/systems',
  keywords: ['automation systems', 'AI support agent', 'invoice processing automation', 'document intelligence system'],
});

export default function SystemsIndexPage() {
  const bookingUrl = siteConfig.personal.booking.url;
  const breadcrumbSchema = generateBreadcrumbsSchema([
    { name: 'Home', url: '/' },
    { name: 'Systems', url: '/systems' },
  ]);

  // SEO: ItemList schema for carousel rich results in Google
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AI Automation Systems for Small Business',
    description: 'Choose from 4 productized AI automation systems designed for small and mid-sized businesses.',
    numberOfItems: systems.length,
    itemListElement: systems.map((system, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: system.name,
      url: `${siteUrl}/systems/${system.slug}`,
      description: system.shortHeadline,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-electric-blue mb-4">
            The 4 systems
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            Choose a system. Book a call. Get it installed.
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            These are fixed-scope, proven builds designed to remove busywork and help you scale without hiring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {systems.map((system) => (
            <div
              key={system.slug}
              className="flex flex-col rounded-2xl border border-white/6 bg-white/2 p-6 hover:bg-white/4 hover:border-white/10 transition-colors"
            >
              {/* Price */}
              <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: system.accent }}>
                {system.priceLabel}
              </p>

              {/* Name */}
              <h2 className="font-display text-xl font-bold text-white mb-3 leading-snug">{system.name}</h2>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-1">{system.shortHeadline}</p>

              {/* CTAs */}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/6">
                <Link
                  href={`/systems/${system.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition-opacity hover:opacity-80"
                  style={{ color: system.accent, borderColor: `${system.accent}40`, backgroundColor: `${system.accent}12` }}
                >
                  View details
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Calendar className="w-4 h-4" style={{ color: system.accent }} />
                  Book a free call
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl text-sm font-semibold text-white border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            {siteConfig.personal.booking.label}
            <span className="text-xs text-emerald-400/70 font-normal">· {siteConfig.personal.booking.duration}</span>
          </a>
        </div>
      </div>
    </main>
    </>
  );
}
