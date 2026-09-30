import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { automationServices } from '../../config/services';
import { projects } from '../../config/projects';
import { getPostBySlug } from '../../lib/blog';
import {
  Breadcrumbs,
  FAQ,
  JsonLd,
  ProcessSteps,
  WorkflowCTA,
} from '../../components/PageElements';
import DownloadDemo from '../../components/DownloadDemo';
import {
  generateMetadata as seo,
  generateBreadcrumbsSchema,
  generateFAQPageSchema,
  generateAutomationServiceSchema,
} from '../../lib/seo';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return automationServices.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = automationServices.find((item) => item.slug === slug);
  return service
    ? seo({
        title: service.seoTitle ?? `${service.title} Services`,
        description: service.seoDescription ?? service.description,
        path: `/services/${slug}`,
      })
    : { title: 'Service not found', robots: { index: false } };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = automationServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const project = projects.find((item) => item.slug === service.projectSlug);
  const guide = await getPostBySlug(service.articleSlug);
  const related = automationServices.filter((item) =>
    service.relatedServiceSlugs?.includes(item.slug),
  );
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs
          items={[
            { name: 'Services', href: '/services' },
            { name: service.title },
          ]}
        />
        <p className="eyebrow">
          Service /{service.number} · {service.title}
        </p>
        <h1>{service.title}</h1>
        <p className="service-promise">{service.shortTitle}</p>
        <p className="lead">{service.description}</p>
        <div className="button-row">
          <Link className="button" href={`/contact?service=${service.slug}`}>
            Discuss this workflow <ArrowUpRight size={17} />
          </Link>
          <a className="text-link" href="#deliverables">
            What you receive <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <section className="section section-tinted section-line">
        <div className="container detail-layout">
          <div>
            <p className="eyebrow">Sound familiar?</p>
            <h2>{service.problem}</h2>
            <p className="service-result">
              <strong>Your outcome</strong>
              {service.outcome}
            </p>
            <ul className="check-list">
              {service.examples.map((example) => (
                <li key={example}>
                  <Check size={18} />
                  {example}
                </li>
              ))}
            </ul>
          </div>
          <div className="output-sample">
            <span className="sample-badge">
              Illustrative output · fictional data
            </span>
            <h3>{service.sample.destination}</h3>
            <p>
              {service.sample.source} → {service.sample.destination}
            </p>
            {service.sample.files.map((file) => (
              <code key={file}>{file}</code>
            ))}
          </div>
        </div>
      </section>
      <section id="deliverables" className="section">
        <div className="container detail-layout">
          <div>
            <p className="eyebrow">The handover</p>
            <h2>What you receive.</h2>
            <ul className="check-list">
              {service.deliverables.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>A clear scope from the start.</h3>
            <p className="scope-note">
              <strong>Service boundary</strong>
              {service.scope}
            </p>
            <p className="muted small">
              The system, access requirements, volume, and deadline determine
              the approach and quote. A representative pilot comes first.
            </p>
            {project && (
              <div className="scope-note">
                <strong>Relevant implementation</strong>
                <p>{project.contribution ?? project.shortDescription}</p>
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  {project.title}
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      {service.discovery && (
        <section className="section section-line">
          <div className="container detail-layout">
            <div>
              <p className="eyebrow">A useful first brief</p>
              <h2>What to bring to the walkthrough.</h2>
              <p className="muted">
                These details help define a representative pilot. An anonymized
                example is enough to start; access can be arranged after we
                agree on the scope.
              </p>
            </div>
            <ul className="check-list">
              {service.discovery.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {slug === 'bulk-document-downloads' && (
        <section className="section section-tinted section-line">
          <div className="container demo-layout">
            <div>
              <p className="eyebrow">See the behavior</p>
              <h2>
                Pause. Resume.
                <br />
                Account for every file.
              </h2>
              <p className="lead" style={{ marginTop: 20 }}>
                Try the sample batch. This browser simulation shows the output
                and progress behavior we can validate in your pilot.
              </p>
            </div>
            <DownloadDemo />
          </div>
        </section>
      )}
      <section className="section section-line">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How we get there</p>
              <h2>A pilot before the full build.</h2>
            </div>
          </div>
          <ProcessSteps />
        </div>
      </section>
      <section className="section section-tinted section-line">
        <div className="container">
          <div className="section-heading">
            <h2>Questions about this service.</h2>
          </div>
          <FAQ items={service.faqs} />
          <p className="section-footnote">
            Read the practical guide:{' '}
            <Link href={`/blog/${service.articleSlug}`} className="text-link">
              {guide?.title ??
                `Planning your ${service.title.toLowerCase()} workflow`}{' '}
              <ArrowRight size={15} />
            </Link>
          </p>
        </div>
      </section>
      <section className="section container">
        <WorkflowCTA service={slug} />
        <div className="section-footnote">
          Related services:{' '}
          {related.map((item) => (
            <Link
              className="text-link"
              key={item.slug}
              href={`/services/${item.slug}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </section>
      <JsonLd data={generateAutomationServiceSchema(service)} />
      <JsonLd data={generateFAQPageSchema(service.faqs)} />
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.title, url: `/services/${slug}` },
        ])}
      />
    </main>
  );
}
