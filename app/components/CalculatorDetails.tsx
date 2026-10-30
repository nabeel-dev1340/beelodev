import Link from 'next/link';
import { Check } from 'lucide-react';
import { calculatorContent } from '../config/calculators';
import { FAQ, JsonLd, WorkflowCTA } from './PageElements';
import { generateFAQPageSchema } from '../lib/seo';

export default function CalculatorDetails({
  kind,
}: {
  kind: keyof typeof calculatorContent;
}) {
  const content = calculatorContent[kind];
  return (
    <>
      <section className="section section-tinted section-line">
        <div className="container detail-layout">
          <div>
            <h2>How the estimate works.</h2>
            <p className="scope-note">
              <strong>Formula</strong>
              {content.formula}
            </p>
            <p className="muted">{content.example}</p>
          </div>
          <div>
            <h3>What to count</h3>
            <ul className="check-list">
              {content.include.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <h2>Questions about this estimate.</h2>
        </div>
        <FAQ items={content.faqs} />
        <p className="section-footnote">
          Related:{' '}
          {content.related.map((item) => (
            <Link key={item.href} href={item.href} className="text-link">
              {item.label}
            </Link>
          ))}
        </p>
      </section>
      <section className="container section">
        <WorkflowCTA service="other" />
      </section>
      <JsonLd data={generateFAQPageSchema(content.faqs)} />
    </>
  );
}
