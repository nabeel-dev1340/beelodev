import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';
import SupportCostCalculatorPage from './SupportCostCalculatorPage';

export const metadata = generateSEOMetadata({
  title: 'Support Cost Calculator',
  description:
    'Estimate how much manual support handling is costing your business each year, then see how an AI Support Agent removes repetitive workload.',
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

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Support Cost Calculator',
    url: `${siteUrl}/support-cost-calculator`,
    description:
      'Calculate the annual cost of handling support tickets manually, then see how an AI Support Agent reduces repetitive workload.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SupportCostCalculatorPage />
    </>
  );
}
