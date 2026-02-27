import { generateMetadata as generateSEOMetadata, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';
import DocumentIntelligenceCostCalculatorPage from './DocumentIntelligenceCostCalculatorPage';

export const metadata = generateSEOMetadata({
  title: 'Document Intelligence Cost Calculator',
  description:
    'Estimate how much time and money your team loses to searching and extracting info from documents each year, then see how Docu-Brain fixes it.',
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

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Document Intelligence Cost Calculator',
    url: `${siteUrl}/document-intelligence-cost-calculator`,
    description:
      'Calculate the annual cost of document search and extraction overhead, then see how Docu-Brain turns files into structured, searchable records.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <DocumentIntelligenceCostCalculatorPage />
    </>
  );
}
