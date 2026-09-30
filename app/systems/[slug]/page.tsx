import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowUpRight } from 'lucide-react';
import { systems, getSystem, systemSlugs } from '../../config/systems';
import { Breadcrumbs, FAQ, JsonLd, WorkflowCTA } from '../../components/PageElements';
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
    ? seo({ title: system.name, description: system.longDescription, path: `/systems/${slug}` })
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
        <p className="eyebrow">Other automations</p>
        <h1>{system.name}</h1>
        <p className="lead">{system.longDescription}</p>
        <div className="button-row">
          <Link href="/contact?service=other" className="button">
            Discuss this workflow <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
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
