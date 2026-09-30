import CostCalculator from '../components/CostCalculator';
import { Breadcrumbs, JsonLd } from '../components/PageElements';
import { generateMetadata as seo, generateBreadcrumbsSchema } from '../lib/seo';

export const metadata = seo({
  title: 'Invoice Processing Cost Calculator',
  description:
    'Estimate the time and labor cost of manual invoice handling with your own volume, handling time, and hourly rate.',
  path: '/invoice-processing-cost-calculator',
});
export default function Page() {
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs
          items={[
            { name: 'Other automations', href: '/systems' },
            { name: 'Invoice Processing Cost Calculator' },
          ]}
        />
        <p className="eyebrow">Free planning tool</p>
        <h1>Invoice Processing Cost Calculator</h1>
        <p className="lead">
          Estimate the time and labor cost of manual invoice handling with your own volume, handling
          time, and hourly rate.
        </p>
      </div>
      <section className="container section section-line" aria-label="Cost calculator">
        <CostCalculator kind="invoice" />
      </section>
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          {
            name: 'Invoice Processing Cost Calculator',
            url: '/invoice-processing-cost-calculator',
          },
        ])}
      />
    </main>
  );
}
