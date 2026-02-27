import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';
import InvoiceProcessingCostCalculatorPage from './InvoiceProcessingCostCalculatorPage';

export const metadata = generateSEOMetadata({
  title: 'Invoice Processing Cost Calculator',
  description:
    'Estimate how much manual invoice processing is costing your business each year, then see how Zero-Touch Invoice Processing removes the busywork.',
  path: '/invoice-processing-cost-calculator',
  keywords: [
    'invoice processing cost calculator',
    'manual invoice processing cost',
    'accounts payable cost',
    'invoice data entry cost',
    'invoice automation ROI',
    'accounts payable automation',
  ],
});

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbsSchema([
    { name: 'Home', url: '/' },
    { name: 'Invoice Processing Cost Calculator', url: '/invoice-processing-cost-calculator' },
  ]);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Invoice Processing Cost Calculator',
    url: `${siteUrl}/invoice-processing-cost-calculator`,
    description:
      'Calculate how much manual invoice processing is costing your business annually, then book a strategy call to eliminate the busywork.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <InvoiceProcessingCostCalculatorPage />
    </>
  );
}
