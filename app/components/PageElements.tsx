import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { deliverySteps } from '../config/services';
import { revampContent } from '../config/site';

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <Link href="/">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="contents">
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href}>{item.name}</Link>
          ) : (
            <span aria-current="page">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function ProcessSteps({
  headingLevel = 'h3',
}: {
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  return (
    <div className="process-grid">
      {deliverySteps.map((step, i) => (
        <div className="process-step" key={step.title}>
          <span className="step-number">0{i + 1}</span>
          <Heading>{step.title}</Heading>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            {item.question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function WorkflowCTA({ service }: { service?: string }) {
  return (
    <div className="cta-band">
      <div>
        <h2>{revampContent.workflowCta.title}</h2>
        <p>{revampContent.workflowCta.description}</p>
      </div>
      <Link
        href={service ? `/contact?service=${service}` : '/contact'}
        className="button"
      >
        {revampContent.workflowCta.label} <ArrowUpRight size={17} />
      </Link>
    </div>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
