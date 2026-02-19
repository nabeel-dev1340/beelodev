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
 * Injects all global JSON-LD structured data into the document <head>.
 * Rendered server-side in the root layout so it's present on every page.
 *
 * Schema graph included:
 *   WebSite        — entity establishment + sitelinks eligibility
 *   Organization   — brand entity with logo, contacts, sameAs links
 *   Person         — founder knowledge-panel candidate
 *   ProfessionalService — local/global business with AggregateRating
 *   Service[]      — one per service offering (AI, Full-Stack, WP, Mobile)
 *   Review[]       — real client testimonials with ReviewRating
 *   FAQPage        — targets featured snippets and People Also Ask
 */
export default function StructuredData() {
  const webSiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const personSchema = generatePersonSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const servicesSchema = generateServicesSchema();
  const reviewsSchema = generateReviewsSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {servicesSchema.map((service, index) => (
        <script
          key={`service-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
      {reviewsSchema.map((review, index) => (
        <script
          key={`review-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
