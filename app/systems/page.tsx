import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { systems } from '../config/systems';
import { siteConfig } from '../config/site';
import { generateMetadata as generateSEOMetadata } from '../lib/seo';

export const metadata = generateSEOMetadata({
  title: 'Automation Systems',
  description:
    'Choose one of three proven automation systems: AI Support Agent, Auto-Invoicing, and Docu-Brain. Book a free discovery call to get a recommendation.',
  path: '/systems',
  keywords: ['automation systems', 'AI support agent', 'invoice processing automation', 'document intelligence system'],
});

export default function SystemsIndexPage() {
  const bookingUrl = siteConfig.personal.booking.url;

  return (
    <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-electric-blue mb-4">
            The 3 systems
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            Choose a system. Book a call. Get it installed.
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            These are fixed-scope, proven builds designed to remove busywork and help you scale without hiring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {systems.map((system) => (
            <div
              key={system.slug}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7"
            >
              <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: system.accent }}>
                {system.priceLabel}
              </p>
              <h2 className="font-display text-2xl font-bold text-white mb-3">{system.name}</h2>
              <p className="text-neutral-300 leading-relaxed mb-6">{system.shortHeadline}</p>

              <div className="flex items-center gap-3">
                <Link
                  href={`/systems/${system.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: system.accent }}
                >
                  View details
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Calendar className="w-4 h-4" style={{ color: system.accent }} />
                  Book call
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
  );
}
