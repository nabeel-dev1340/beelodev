import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generatePersonSchema,
  generateLocalBusinessSchema,
  generateServicesSchema,
  generateReviewsSchema,
  generateFAQSchema,
} from '../lib/seo';

/**
 * Injects all global JSON-LD structured data as a single @graph array.
 * Using @graph lets Google understand entity relationships (Organization ↔ Person ↔ WebSite)
 * and avoids redundant @context declarations, which reduces page weight and improves parsing.
 *
 * Schema graph included:
 *   WebSite              — entity establishment + sitelinks search box
 *   Organization         — brand entity with logo, contacts, sameAs links
 *   Person               — founder knowledge-panel candidate
 *   ProfessionalService  — local/global business with AggregateRating
 *   Service[]            — one per service offering
 *   Review[]             — real client testimonials with ReviewRating
 *   FAQPage              — targets featured snippets and People Also Ask
 */
export default function StructuredData() {
  const webSiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const personSchema = generatePersonSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const servicesSchema = generateServicesSchema();
  const reviewsSchema = generateReviewsSchema();
  const faqSchema = generateFAQSchema();

  // Strip @context from individual schemas since @graph provides it once at the top level
  const stripContext = <T extends Record<string, unknown>>(schema: T): Omit<T, '@context'> => {
    const { '@context': _, ...rest } = schema;
    return rest as Omit<T, '@context'>;
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      stripContext(webSiteSchema),
      stripContext(organizationSchema),
      stripContext(personSchema),
      stripContext(localBusinessSchema),
      ...servicesSchema.map(stripContext),
      ...reviewsSchema.map(stripContext),
      stripContext(faqSchema),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
