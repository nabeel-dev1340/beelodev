import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2 } from 'lucide-react';
import { projects } from '../../config/projects';
import type { SystemSlug } from '../../config/systems';
import { getSystem, systemSlugs } from '../../config/systems';
import {
  generateMetadata as generateSEOMetadata,
  generateBreadcrumbsSchema,
  generateFAQPageSchema,
  siteUrl,
} from '../../lib/seo';
import { siteConfig } from '../../config/site';

type SystemPageProps = {
  params: Promise<{ slug: SystemSlug }>;
};

export function generateStaticParams() {
  return systemSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SystemPageProps) {
  const { slug } = await params;
  const system = getSystem(slug);

  if (!system) {
    return generateSEOMetadata({
      title: 'System Not Found',
      description: 'This system does not exist.',
      path: `/systems/${slug}`,
      noIndex: true,
    });
  }

  return generateSEOMetadata({
    title: system.name,
    description: system.shortHeadline,
    path: `/systems/${system.slug}`,
    keywords: system.keywords,
    type: 'article',
  });
}

export default async function SystemPage({ params }: SystemPageProps) {
  const { slug } = await params;
  const system = getSystem(slug);

  if (!system) {
    notFound();
  }

  const bookingUrl = siteConfig.personal.booking.url;
  const relatedProjects = projects.filter((p) => p.systems?.includes(system.slug));

  const breadcrumbSchema = generateBreadcrumbsSchema([
    { name: 'Home', url: '/' },
    { name: 'Systems', url: '/systems' },
    { name: system.name, url: `/systems/${system.slug}` },
  ]);

  const faqSchema = generateFAQPageSchema(system.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="min-h-screen py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol
              className="flex items-center gap-1.5 text-xs text-neutral-500"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-neutral-300 transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true" className="text-neutral-700">
                /
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/systems" className="hover:text-neutral-300 transition-colors" itemProp="item">
                  <span itemProp="name">Systems</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true" className="text-neutral-700">
                /
              </li>
              <li
                className="text-neutral-400 truncate max-w-[180px] sm:max-w-none"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span itemProp="name">{system.name}</span>
                <meta itemProp="position" content="3" />
                <meta itemProp="item" content={`${siteUrl}/systems/${system.slug}`} />
              </li>
            </ol>
          </nav>

          <Link
            href="/systems"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to systems
          </Link>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
            <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: system.accent }}>
              {system.priceLabel} · Typical timeline {system.timeline}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5">{system.name}</h1>

            <p className="text-neutral-300 leading-relaxed mb-6">{system.longDescription}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-10">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-shadow"
                style={{ backgroundImage: `linear-gradient(135deg, ${system.accent}, ${system.accent}cc)` }}
              >
                <Calendar className="w-4 h-4" />
                Book a Free Discovery Call
              </a>
              <span className="text-xs text-neutral-500">
                30 min · You will leave with a recommendation and next steps.
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <section aria-label="Who it is for" className="border border-white/10 bg-white/5 rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-white mb-3">Best for</h2>
                <p className="text-neutral-300 leading-relaxed">{system.bestFor}</p>
              </section>

              <section aria-label="Integrations" className="border border-white/10 bg-white/5 rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-white mb-4">Integrations</h2>
                <div className="flex flex-wrap gap-2">
                  {system.integrations.map((i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-neutral-200"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </section>

              <section aria-label="Outcomes" className="border border-white/10 bg-white/5 rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-white mb-4">Outcomes</h2>
                <ul className="space-y-3">
                  {system.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: system.accent }} />
                      <span className="text-sm leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-label="What is included" className="border border-white/10 bg-white/5 rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-white mb-4">What is included</h2>
                <ul className="space-y-3">
                  {system.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: system.accent }} />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <section aria-label="Case studies" className="mt-12">
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Related case studies</h2>
              <Link
                href="/#portfolio"
                className="text-sm font-medium inline-flex items-center gap-2"
                style={{ color: system.accent }}
              >
                View more
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {relatedProjects.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="text-neutral-300 font-medium">No case studies for this system yet.</p>
                <p className="text-neutral-500 text-sm mt-2">
                  Book a call and we will show you relevant examples during the discovery session.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedProjects.slice(0, 4).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors"
                  >
                    <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: p.accent }}>
                      {p.category}
                    </p>
                    <div className="font-display text-xl font-bold text-white mb-2">{p.title}</div>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">{p.shortDescription}</p>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section aria-label="FAQ" className="mt-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-4">
              {system.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <summary className="cursor-pointer text-white font-semibold">{faq.question}</summary>
                  <p className="text-neutral-300 leading-relaxed mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-12 text-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl text-sm font-semibold text-white"
            >
              <Calendar className="w-4 h-4" style={{ color: system.accent }} />
              Book a Free Discovery Call
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
