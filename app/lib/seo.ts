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
  // Development stack
  'full stack development',
  'Next.js development',
  'React development',
  'Node.js backend development',
  'custom software development',
  'web development services',
  // Other service verticals
  'WordPress development',
  'mobile app development',
  'React Native developer',
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
  const description = project.shortDescription;
  // Prefer the first project screenshot as the OG image for richer social previews
  const image =
    project.images[0] ? `${siteUrl}${project.images[0]}` : `${siteUrl}/og-image.svg`;

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
    title: project.title,
    description,
    keywords: projectKeywords,
    authors: [{ name: personal.name, url: siteUrl }],
    openGraph: {
      type: 'article',
      url,
      siteName,
      title: `${project.title} | ${siteName}`,
      description,
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
      title: `${project.title} | ${siteName}`,
      description,
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

/** Schema.org WebSite — establishes the entity and enables sitelinks in Google. */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
    },
  };
}

/** Schema.org Organization with correct logo ImageObject and numeric ratings. */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: personal.brandName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.svg`,
      width: 200,
      height: 60,
    },
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
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Facebook')?.href,
      siteConfig.contact.socialPlatforms.find(s => s.label === 'Instagram')?.href,
      'https://github.com/nabeel-dev1340',
    ].filter(Boolean) as string[],
    // Numeric values required by Google's Rich Results spec
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: parseFloat(siteConfig.testimonials.aggregateRating),
      reviewCount: 100,
      bestRating: 5,
      worstRating: 1,
    },
    founder: {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Syed Nabeel',
    },
  };
}

/** Schema.org Person — Google uses this to build a Knowledge Panel for the founder. */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: 'Syed Nabeel',
    alternateName: personal.brandName,
    url: siteUrl,
    email: personal.email,
    telephone: personal.phone,
    jobTitle: 'AI Automation Engineer & Full-Stack Developer',
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
      'Full Stack Web Development',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'WordPress',
      'React Native',
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
      'AI Automation',
      'Full Stack Development',
      'WordPress Development',
      'Mobile App Development',
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: parseFloat(siteConfig.testimonials.aggregateRating),
      reviewCount: 100,
      bestRating: 5,
      worstRating: 1,
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
export function generateFAQSchema() {
  const faqs = [
    {
      question: 'What types of automation systems does Beelodev build?',
      answer:
        'Beelodev specialises in AI-powered automation systems including 24/7 AI Support Agents, Invoice Processing Automation, Document Intelligence Systems, email classification workflows, lead-scoring pipelines, and custom business process automation using n8n, Make.com, Zapier, and OpenAI.',
    },
    {
      question: 'How long does it take to build a custom automation system?',
      answer:
        'Most systems are delivered within 1–4 weeks. AI Support Agents take 1–2 weeks, Invoice Processing systems take 2–3 weeks, and enterprise-scale automations take 3–6 weeks. A detailed timeline is provided after your free discovery call.',
    },
    {
      question: 'How much does business automation cost?',
      answer:
        'Packages start at $1,099 for AI Support Agents, $1,299 for Invoice Processing Automation, and $1,999 for Document Intelligence systems. All packages include 2 weeks of free post-launch support.',
    },
    {
      question: 'Do you work with businesses outside of Pakistan?',
      answer:
        'Yes. Beelodev works with clients across 30+ countries and is fully remote. We accommodate different time zones for meetings and provide asynchronous project updates throughout.',
    },
    {
      question: 'What tools and platforms do you use for workflow automation?',
      answer:
        'We build automation systems with n8n, Make.com, Zapier, and custom Python scripts. For AI capabilities we integrate OpenAI GPT, Anthropic Claude, and other LLMs, connecting them to CRMs, accounting tools, databases, Google Workspace, email platforms, and custom APIs.',
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
