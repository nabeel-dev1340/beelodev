import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { siteConfig } from '../config/site';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, generateAboutPersonSchema } from '../lib/seo';

// SEO: keyword optimization
export const metadata = generateSEOMetadata({
  title: 'About Beelodev — AI Automation Agency',
  description:
    'Beelodev is an AI automation agency founded by Nabeel Sharafat. 100+ systems deployed across 30+ markets. Top Rated Upwork, Level 1 Fiverr. Support, invoicing, document intelligence. Book a free call.',
  path: '/about',
  keywords: ['AI automation', 'business automation', 'workflow automation', 'automation systems'],
});

export default function AboutPage() {
  const { personal } = siteConfig;
  const breadcrumbSchema = generateBreadcrumbsSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);
  const personSchema = generateAboutPersonSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-wider text-electric-blue mb-4">About</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6">
          About {personal.brandName} — AI Automation Agency
        </h1>
        <p className="text-neutral-300 leading-relaxed mb-8">
          {personal.tagline}
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 mb-10">
          <h2 className="font-display text-xl font-bold text-white mb-3">Founder</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Beelodev was founded by <strong className="text-white">Nabeel Sharafat</strong>, an automation engineer based in Pakistan serving clients worldwide. We build productized systems rather than custom one-offs — so you get a proven scope, a clear timeline, and a simple handoff.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-neutral-200">
              Top Rated on Upwork (5.0, 50+ reviews)
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-neutral-200">
              Level 1 Seller on Fiverr (4.9, 400+ reviews)
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-neutral-200">
              100+ systems deployed
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-neutral-200">
              30+ markets served
            </span>
          </div>
        </div>

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
    </>
  );
}
