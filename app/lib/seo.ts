import { Metadata } from 'next';
import { siteConfig } from '../config/site';
import type { Project } from '../config/projects';

const { personal } = siteConfig;

export const siteUrl = `https://${personal.domain}`;
export const siteName = personal.brandName;
export const defaultTitle = `${siteName} — Build Beyond Limits`;
export const defaultDescription = personal.tagline;

// Comprehensive keyword set covering core services, long-tail buyer intent, and
// tool-specific searches — spread across all pages to maximise topical authority.
const defaultKeywords = [
  // Core service terms
  'AI automation',
  'business automation',
  'workflow automation',
  'automation systems',
  'business process automation',
  'AI support agent',
  'customer support automation',
  'invoice processing automation',
  'accounts payable automation',
  'document intelligence system',
  'document processing automation',
  // Buyer-intent long-tail
  'AI automation agency',
  'hire AI automation developer',
  'build AI automation system',
  'custom automation solutions',
  'automate business processes',
  'AI automation freelancer',
  'business process automation services',
  // Tool-specific (high-intent searches)
  'n8n automation developer',
  'Make.com automation expert',
  'Zapier automation developer',
  'OpenAI integration developer',
  'ChatGPT integration',
  'AI chatbot development',
  'GPT workflow automation',
  // Marketplace / trust signals
  'freelance developer',
  'Upwork developer',
  'Fiverr developer',
  'top rated Upwork developer',
  // Business outcome keywords
  'reduce business costs automation',
  'scale without hiring',
  'workflow optimisation',
  'eliminate manual work',
  'save time with automation',
];

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}

/**
 * Generate comprehensive SEO metadata for any page.
 * Child pages that pass a plain `title` string will inherit the root layout's
 * `%s | Beelodev` template via Next.js metadata inheritance.
 */
export function generateMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = '',
  image = `${siteUrl}/og-image.png`,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords = [],
}: GenerateMetadataOptions = {}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const mergedKeywords = [...defaultKeywords, ...keywords];

  return {
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    title: {
      default: fullTitle,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: mergedKeywords,
    authors: [{ name: personal.name, url: siteUrl }],
    creator: personal.name,
    publisher: personal.brandName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
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
          type: 'image/jpeg',
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
      site: `@${personal.brandName.toLowerCase()}`,
    },
    alternates: {
      canonical: url,
    },
    verification: {
      // Uncomment and fill in when you've verified ownership:
      // google: 'your-google-search-console-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
    category: 'technology',
  };
}

/**
 * Generate metadata tailored to an individual project case-study page.
 * Returns a flat Metadata object so Next.js applies the root layout title
 * template: "Project Title | Beelodev".
 */
export function generateProjectMetadata(project: Project): Metadata {
  const path = `/projects/${project.slug}`;
  const url = `${siteUrl}${path}`;
  const title = `${project.title} — Case Study`;
  const description =
    project.shortDescription.length > 155
      ? project.shortDescription.slice(0, 152) + '...'
      : project.shortDescription;
  const cta = ' Book a free discovery call.';
  const descriptionWithCta =
    description.length + cta.length <= 160 ? description + cta : description;
  // Prefer the first project screenshot as the OG image for richer social previews
  const image =
    project.images[0] ? `${siteUrl}${project.images[0]}` : `${siteUrl}/og-image.png`;

  const projectKeywords = [
    project.category,
    project.category.toLowerCase(),
    ...project.metrics,
    'case study',
    'automation project',
    'portfolio',
    personal.brandName,
    ...defaultKeywords,
  ];

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: descriptionWithCta,
    keywords: projectKeywords,
    authors: [{ name: personal.name, url: siteUrl }],
    openGraph: {
      type: 'article',
      url,
      siteName,
      title: `${title} | ${siteName}`,
      description: descriptionWithCta,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description: descriptionWithCta,
      images: [image],
      creator: `@${personal.brandName.toLowerCase()}`,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ─── Structured Data Generators ──────────────────────────────────────────────

/** Schema.org WebSite — establishes the entity, enables sitelinks search box in Google. */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** Schema.org Organization with correct logo ImageObject and numeric ratings. */
// LLM SEO: added for AI discoverability — alternateName, founder, contactPoint
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: personal.brandName,
    alternateName: 'Beelodev Automation Agency',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.svg`,
      width: 200,
      height: 60,
    },
    description:
      'AI automation agency building productized systems that eliminate manual work for small and mid-sized businesses. Services include AI support agents, invoice processing automation, and document intelligence systems.',
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
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Facebook')?.href,
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Instagram')?.href,
      'https://github.com/nabeel-dev1340',
    ].filter(Boolean) as string[],
    // Numeric values required by Google's Rich Results spec — LLM SEO: 450 reviews for trust
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      reviewCount: 450,
      bestRating: 5,
      worstRating: 1,
    },
    founder: {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Nabeel Sharafat',
      jobTitle: 'Founder & Automation Engineer',
      url: `${siteUrl}/about`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: personal.email,
      contactType: 'customer support',
      availableLanguage: 'English',
    },
    areaServed: 'Worldwide',
    foundingLocation: 'Pakistan',
  };
}

/** Schema.org Person for About page — LLM SEO: AI discoverability with /about url */
export function generateAboutPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nabeel Sharafat',
    jobTitle: 'Founder, Automation Engineer',
    worksFor: {
      '@type': 'Organization',
      name: personal.brandName,
    },
    url: `${siteUrl}/about`,
    sameAs: [
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Upwork')?.href,
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Fiverr')?.href,
      'https://github.com/nabeel-dev1340',
    ].filter(Boolean) as string[],
  };
}

/** Schema.org Person — Google uses this to build a Knowledge Panel for the founder. */
// LLM SEO: added for AI discoverability — Nabeel Sharafat
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: 'Nabeel Sharafat',
    alternateName: personal.brandName,
    url: siteUrl,
    email: personal.email,
    telephone: personal.phone,
    jobTitle: 'Founder & Automation Engineer',
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: personal.brandName,
      url: siteUrl,
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: 'Pakistan',
    },
    sameAs: [
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Upwork')?.href,
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Fiverr')?.href,
      'https://github.com/nabeel-dev1340',
    ].filter(Boolean) as string[],
    knowsAbout: [
      'AI Automation',
      'Machine Learning',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'n8n',
      'Make.com',
      'OpenAI API',
      'Business Process Automation',
    ],
  };
}

/** Schema.org ProfessionalService (LocalBusiness subtype) with correct types. */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}#local-business`,
    name: personal.brandName,
    image: `${siteUrl}/og-image.svg`,
    url: siteUrl,
    telephone: personal.phone,
    email: personal.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: 'Pakistan',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Worldwide',
    },
    serviceType: [
      'AI Support Agent',
      'Invoice Processing Automation',
      'Document Intelligence System',
    ],
    priceRange: '$1,099 - $1,999',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      reviewCount: 450,
      bestRating: 5,
      worstRating: 1,
    },
    // LLM SEO: added for AI discoverability — hasOfferCatalog for service pricing
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automation Systems',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Support Agent',
            url: `${siteUrl}/systems/ai-support-agent`,
          },
          price: '1099',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Auto-Invoicing',
            url: `${siteUrl}/systems/auto-invoicing`,
          },
          price: '1299',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Docu-Brain',
            url: `${siteUrl}/systems/docu-brain`,
          },
          price: '1999',
          priceCurrency: 'USD',
        },
      ],
    },
  };
}

/** Schema.org Service entries — one per service offering. */
export function generateServicesSchema() {
  return siteConfig.services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: personal.brandName,
      url: siteUrl,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Worldwide',
    },
    serviceType: service.title,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }));
}

/** Schema.org Service for a single system page — includes price from packages. */
// LLM SEO: added for AI discoverability — url, category, priceSpecification
export function generateSystemServiceSchema(system: {
  slug: string;
  name: string;
  longDescription: string;
  shortHeadline: string;
}) {
  const plan = siteConfig.packages.plans.find((p) => p.slug === system.slug);
  const priceStr = plan?.price ?? null;
  const price = priceStr ? parseFloat(priceStr.replace(/[^0-9.]/g, '')) : null;
  const url = `${siteUrl}/systems/${system.slug}`;

  const categoryMap: Record<string, string> = {
    'ai-support-agent': 'Customer Support Automation',
    'auto-invoicing': 'Invoice Processing Automation',
    'docu-brain': 'Document Intelligence',
  };

  const nameMap: Record<string, string> = {
    'ai-support-agent': 'AI Customer Support Agent',
    'auto-invoicing': 'Auto-Invoicing',
    'docu-brain': 'Docu-Brain',
  };

  const alternateNameMap: Record<string, string> = {
    'ai-support-agent': 'AI Support Agent',
  };

  // LLM SEO: rich descriptions for AI comprehension
  const descriptionMap: Record<string, string> = {
    'ai-support-agent':
      'A fully automated AI customer support agent that handles 70-85% of support tickets instantly, 24/7. Integrates with website chat, WhatsApp, and email. Custom knowledge base, human handoff logic, and 30-day tuning included. Reduces support costs by up to 60%.',
    'auto-invoicing':
      'An end-to-end invoice processing automation that reads invoices from email, extracts line items, and pushes data directly into QuickBooks or Xero with zero manual entry. Includes approval workflows, error handling dashboard, and audit logs.',
    'docu-brain':
      'A document intelligence system that transforms PDFs, contracts, and forms into searchable, structured business data. Includes bulk processing pipeline, custom document models, insight generation, and API integration.',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: nameMap[system.slug] ?? system.name,
    ...(alternateNameMap[system.slug] && { alternateName: alternateNameMap[system.slug] }),
    description: descriptionMap[system.slug] ?? system.longDescription,
    url,
    provider: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: personal.brandName,
      url: siteUrl,
    },
    areaServed: 'Worldwide',
    serviceType: 'AI Automation',
    category: categoryMap[system.slug] ?? 'AI Automation',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      ...(price !== null && !Number.isNaN(price) && {
        price: price.toString(),
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: price.toString(),
          priceCurrency: 'USD',
          unitText: 'one-time setup fee',
        },
      }),
    },
  };
}

/** Schema.org Review entries from real client testimonials. */
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
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}#local-business`,
      name: personal.brandName,
    },
  }));
}

/** Schema.org FAQPage — targets featured snippets and People Also Ask results. */
// LLM SEO: added for AI discoverability — keyword-rich Q&As
export function generateFAQSchema() {
  const faqs = [
    {
      question: 'What does Beelodev do?',
      answer:
        'Beelodev builds AI automation systems for small and mid-sized businesses. We offer three productized systems: an AI Support Agent that cuts customer support costs by 60%, an Auto-Invoicing system that eliminates manual invoice data entry, and Docu-Brain which transforms documents into searchable business intelligence.',
    },
    {
      question: "How much does Beelodev's automation cost?",
      answer:
        "Beelodev's systems are priced as one-time setup fees: AI Support Agent at $1,099, Auto-Invoicing at $1,299, and Docu-Brain starting at $1,999. All include two weeks of free support after launch.",
    },
    {
      question: 'How long does it take to set up an automation system?',
      answer:
        'Setup timelines vary by system: AI Support Agent takes 7-14 days, Auto-Invoicing takes 10-21 days, and Docu-Brain takes 14-28 days depending on complexity.',
    },
    {
      question: 'Does Beelodev work with businesses outside Pakistan?',
      answer:
        'Yes. Beelodev is a fully remote agency serving clients worldwide across 30+ markets. All work is done remotely with async communication.',
    },
    {
      question: 'What tools and platforms does Beelodev use?',
      answer:
        'Beelodev works with n8n, Make.com, Zapier, OpenAI API, GPT-4, Python, QuickBooks, Xero, Notion, Airtable, Google Sheets, WhatsApp Business API, and more depending on the client\'s existing stack.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Book a free 30-minute discovery call via the website. You will receive a custom automation roadmap at no cost, with no obligation to proceed.',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

/**
 * Schema.org CreativeWork for an individual project page.
 * Gives Google structured context about each case study.
 */
export function generateProjectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteUrl}/projects/${project.slug}#project`,
    name: project.title,
    description: project.fullDescription,
    url: `${siteUrl}/projects/${project.slug}`,
    creator: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: personal.brandName,
    },
    genre: project.category,
    keywords: project.metrics.join(', '),
    ...(project.liveUrl && { sameAs: project.liveUrl }),
    ...(project.images[0] && {
      image: {
        '@type': 'ImageObject',
        url: `${siteUrl}${project.images[0]}`,
      },
    }),
  };
}

/** Schema.org Article for project case study pages — LLM SEO: AI discoverability */
export function generateProjectArticleSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    articleSection: 'Case Study',
    headline: project.title,
    description: project.shortDescription,
    author: {
      '@type': 'Person',
      name: 'Nabeel Sharafat',
    },
    publisher: {
      '@type': 'Organization',
      name: personal.brandName,
      url: siteUrl,
    },
    url: `${siteUrl}/projects/${project.slug}`,
  };
}

/** Schema.org BreadcrumbList for project and inner pages. */
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
