import CostCalculator from '../components/CostCalculator';
import { Breadcrumbs, JsonLd } from '../components/PageElements';
import { generateMetadata as seo, generateBreadcrumbsSchema } from '../lib/seo';

export const metadata = seo({
  title: 'Customer Support Cost Calculator',
  description:
    'Estimate the labor cost of manual support using your ticket volume, handling time, and hourly rate. Explore a hypothetical automation share.',
  path: '/support-cost-calculator',
});
export default function Page() {
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs
          items={[
            { name: 'Other automations', href: '/systems' },
            { name: 'Customer Support Cost Calculator' },
          ]}
        />
        <p className="eyebrow">Free planning tool</p>
        <h1>Customer Support Cost Calculator</h1>
        <p className="lead">
          Estimate the labor cost of manual support using your ticket volume, handling time, and
          hourly rate. Explore a hypothetical automation share.
        </p>
      </div>
      <section className="container section section-line" aria-label="Cost calculator">
        <CostCalculator kind="support" />
      </section>
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Customer Support Cost Calculator', url: '/support-cost-calculator' },
        ])}
      />
    </main>
  );
}
