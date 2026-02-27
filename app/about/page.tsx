import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { siteConfig } from '../config/site';
import { generateMetadata as generateSEOMetadata } from '../lib/seo';

export const metadata = generateSEOMetadata({
  title: 'About',
  description:
    'Beelodev builds proven automation systems for support, invoicing, and document intelligence. Book a free discovery call to see the best fit.',
  path: '/about',
  keywords: ['AI automation', 'business automation', 'workflow automation', 'automation systems'],
});

export default function AboutPage() {
  const { personal } = siteConfig;

  return (
    <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-wider text-electric-blue mb-4">About</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6">
          {personal.brandName}
        </h1>
        <p className="text-neutral-300 leading-relaxed mb-8">
          {personal.tagline}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Location</div>
            <div className="text-white font-semibold">{personal.location}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Response time</div>
            <div className="text-white font-semibold">{personal.responseTime}</div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-white mb-4">What we do</h2>
          <p className="text-neutral-300 leading-relaxed mb-6">
            We focus on three productized automation systems: an AI Support Agent, Auto-Invoicing, and Docu-Brain.
            Each system is built to solve a specific operational bottleneck with a clear scope, a fast timeline, and a simple handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={personal.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-shadow"
              style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
            >
              <Calendar className="w-4 h-4" />
              {personal.booking.label}
            </a>
            <Link
              href="/systems"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              View systems
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
