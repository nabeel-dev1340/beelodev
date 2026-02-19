import { Metadata } from 'next';
import { siteConfig } from '../config/site';

const { personal } = siteConfig;

export const siteUrl = `https://${personal.domain}`;
export const siteName = personal.brandName;
export const defaultTitle = `${siteName} — Build Beyond Limits`;
export const defaultDescription = personal.tagline;

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Generate comprehensive SEO metadata for any page
 */
export function generateMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = '',
  image = `${siteUrl}/og-image.jpg`,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
}: GenerateMetadataOptions = {}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: fullTitle,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: [
      'AI automation',
      'business automation',
      'workflow automation',
      'full stack development',
      'Next.js development',
      'React development',
      'WordPress development',
      'mobile app development',
      'React Native',
      'AI chatbots',
      'automation systems',
      'business process automation',
      'custom software development',
      'web development services',
      'freelance developer',
      'Upwork developer',
      'Fiverr developer',
    ],
    authors: [{ name: personal.name }],
    creator: personal.name,
    publisher: personal.brandName,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_US',
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: `@${personal.brandName.toLowerCase()}`,
    },
    alternates: {
      canonical: url,
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
    category: 'technology',
  };
}

/**
 * Generate structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: personal.brandName,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: defaultDescription,
    email: personal.email,
    telephone: personal.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: 'Pakistan',
    },
    sameAs: [
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Upwork')?.href,
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Fiverr')?.href,
      siteConfig.contact.socialPlatforms.find(s => s.label === 'LinkedIn')?.href,
    ].filter(Boolean) as string[],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.testimonials.aggregateRating,
      reviewCount: '100+',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Generate structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: personal.brandName,
    image: `${siteUrl}/logo.svg`,
    '@id': `${siteUrl}#organization`,
    url: siteUrl,
    telephone: personal.phone,
    email: personal.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: 'Pakistan',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'PK',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    serviceType: [
      'AI Automation',
      'Full Stack Development',
      'WordPress Development',
      'Mobile App Development',
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.testimonials.aggregateRating,
      reviewCount: '100+',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Generate structured data for Services
 */
export function generateServicesSchema() {
  return siteConfig.services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: personal.brandName,
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    serviceType: service.title,
  }));
}

/**
 * Generate structured data for Reviews
 */
export function generateReviewsSchema() {
  return siteConfig.testimonials.items.map((testimonial) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: testimonial.author,
    },
    reviewBody: testimonial.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    itemReviewed: {
      '@type': 'Service',
      name: personal.brandName,
    },
  }));
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbsSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
