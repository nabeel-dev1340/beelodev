import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';
import SupportCostCalculatorPage from './SupportCostCalculatorPage';

// SEO: keyword optimization
export const metadata = generateSEOMetadata({
  title: 'Customer Support Cost Calculator — AI vs Human',
  description:
    'Calculate exactly how much your customer support is costing you — and how much you could save with an AI support agent. Free tool.',
  path: '/support-cost-calculator',
  keywords: [
    'support cost calculator',
    'customer support cost',
    'helpdesk cost',
    'support automation ROI',
    'AI support agent',
    'reduce support tickets',
  ],
});

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbsSchema([
    { name: 'Home', url: '/' },
    { name: 'Support Cost Calculator', url: '/support-cost-calculator' },
  ]);

  // SEO: WebApplication schema for calculator
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Customer Support Cost Calculator',
    description:
      'Calculate how much customer support costs and compare AI vs human support cost. Free business tool.',
    url: `${siteUrl}/support-cost-calculator`,
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}#website` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <SupportCostCalculatorPage />
    </>
  );
}
