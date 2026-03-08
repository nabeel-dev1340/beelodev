import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';
import InvoiceProcessingCostCalculatorPage from './InvoiceProcessingCostCalculatorPage';

// SEO: keyword optimization
export const metadata = generateSEOMetadata({
  title: 'Invoice Processing Cost Calculator',
  description:
    'See the real cost of manual invoice processing at your company and calculate your ROI from automation. Free calculator.',
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

  // SEO: WebApplication schema for calculator
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Invoice Processing Cost Calculator',
    description:
      'Calculate how much invoice processing costs and compare manual vs automated invoicing cost. Free business tool.',
    url: `${siteUrl}/invoice-processing-cost-calculator`,
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}#website` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <InvoiceProcessingCostCalculatorPage />
    </>
  );
}
