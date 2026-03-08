import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';
import DocumentIntelligenceCostCalculatorPage from './DocumentIntelligenceCostCalculatorPage';

// SEO: keyword optimization
export const metadata = generateSEOMetadata({
  title: 'Document Processing Cost Calculator',
  description:
    'Calculate how much document processing and search overhead costs your team each year. Free tool to estimate document automation ROI.',
  path: '/document-intelligence-cost-calculator',
  keywords: [
    'document intelligence cost calculator',
    'document processing cost',
    'PDF extraction cost',
    'knowledge management cost',
    'document automation ROI',
  ],
});

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbsSchema([
    { name: 'Home', url: '/' },
    { name: 'Document Intelligence Cost Calculator', url: '/document-intelligence-cost-calculator' },
  ]);

  // SEO: WebApplication schema for calculator
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Document Processing Cost Calculator',
    description:
      'Calculate how much document processing costs and estimate document automation ROI. Free business tool.',
    url: `${siteUrl}/document-intelligence-cost-calculator`,
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}#website` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <DocumentIntelligenceCostCalculatorPage />
    </>
  );
}
