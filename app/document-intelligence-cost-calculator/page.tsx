import CostCalculator from '../components/CostCalculator';
import { Breadcrumbs, JsonLd } from '../components/PageElements';
import { generateMetadata as seo, generateBreadcrumbsSchema } from '../lib/seo';

export const metadata = seo({
  title: 'Document Handling Cost Calculator',
  description:
    'Estimate the labor cost of time spent finding and handling documents using your team size, working days, and hourly rate.',
  path: '/document-intelligence-cost-calculator',
});
export default function Page() {
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs
          items={[
            { name: 'Other automations', href: '/systems' },
            { name: 'Document Handling Cost Calculator' },
          ]}
        />
        <p className="eyebrow">Free planning tool</p>
        <h1>Document Handling Cost Calculator</h1>
        <p className="lead">
          Estimate the labor cost of time spent finding and handling documents using your team size,
          working days, and hourly rate.
        </p>
      </div>
      <section className="container section section-line" aria-label="Cost calculator">
        <CostCalculator kind="document" />
      </section>
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          {
            name: 'Document Handling Cost Calculator',
            url: '/document-intelligence-cost-calculator',
          },
        ])}
      />
    </main>
  );
}
