import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowUpRight } from 'lucide-react';
import { systems, getSystem, systemSlugs } from '../../config/systems';
import { Breadcrumbs, FAQ, JsonLd, ProcessSteps, WorkflowCTA } from '../../components/PageElements';
import { bookingUrl } from '../../config/site';
import {
  generateMetadata as seo,
  generateSystemServiceSchema,
  generateFAQPageSchema,
  generateBreadcrumbsSchema,
} from '../../lib/seo';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return systemSlugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const system = getSystem(slug);
  return system
    ? seo({ title: system.seoTitle, description: system.seoDescription, path: `/systems/${slug}` })
    : { title: 'Workflow not found', robots: { index: false } };
}
export default async function SystemPage({ params }: Props) {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) notFound();
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs
          items={[{ name: 'Other automations', href: '/systems' }, { name: system.name }]}
        />
        <p className="eyebrow">Other automations · {system.name}</p>
        <h1>{system.heading}</h1>
        <p className="lead">{system.longDescription}</p>
        <div className="button-row">
          <Link href="/contact?service=other" className="button">
            Discuss this workflow <ArrowUpRight size={17} />
          </Link>
          <a
            href={bookingUrl(slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Book a 30 minute call <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <section className="section section-line">
        <div className="container detail-layout">
          <div>
            <h2>{system.explainer.question}</h2>
            <p className="muted">{system.explainer.answer}</p>
          </div>
          {system.fit && (
            <div>
              <h3>When it is worth automating</h3>
              <ul className="check-list">
                {system.fit.good.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="scope-note">
                <strong>When it may not be</strong>
                {system.fit.notYet}
              </p>
            </div>
          )}
        </div>
      </section>
      {system.steps && (
        <section className="section section-line">
          <div className="container">
            <div className="section-heading">
              <h2>How the workflow runs.</h2>
            </div>
            <ProcessSteps steps={system.steps} />
          </div>
        </section>
      )}
      <section className="section section-tinted section-line">
        <div className="container detail-layout">
          <div>
            <h2>What the workflow can include.</h2>
            <ul className="check-list">
              {system.includes.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Where it fits</h3>
            <p className="scope-note">{system.bestFor}</p>
            <h3>Potential integrations</h3>
            <p className="scope-note">{system.integrations.join(' · ')}</p>
            <p className="small muted">
              Feasibility, pricing, and timing follow a review of your workflow and available
              integrations. AI outputs need agreed validation and human escalation rules.
            </p>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <h2>Questions about the workflow.</h2>
        </div>
        <FAQ items={system.faqs} />
        <p className="section-footnote">
          Related:{' '}
          {system.resources.map((item) => (
            <Link key={item.href} href={item.href} className="text-link">
              {item.label}
            </Link>
          ))}
        </p>
      </section>
      <section className="container section">
        <WorkflowCTA />
        <p className="section-footnote">
          Other workflows:{' '}
          {systems
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <Link key={item.slug} href={`/systems/${item.slug}`} className="text-link">
                {item.name}
              </Link>
            ))}
        </p>
      </section>
      <JsonLd data={generateSystemServiceSchema(system)} />
      <JsonLd data={generateFAQPageSchema(system.faqs)} />
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Other automations', url: '/systems' },
          { name: system.name, url: `/systems/${slug}` },
        ])}
      />
    </main>
  );
}
