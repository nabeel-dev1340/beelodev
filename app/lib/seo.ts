import type { Metadata } from 'next';
import { siteConfig } from '../config/site';
import {
  automationServices,
  type AutomationService,
  commonFAQs,
} from '../config/services';
import type { Project } from '../config/projects';

const { personal } = siteConfig;
export const siteUrl = `https://${personal.domain}`;
export const siteName = personal.brandName;
export const defaultTitle = 'Custom Python & Browser Automation';
export const defaultDescription = personal.tagline;

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
};

export function generateMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = '',
  image = `${siteUrl}/opengraph-image`,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords = [],
}: MetadataOptions = {}): Metadata {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: fullTitle },
    description,
    ...(keywords.length > 0 && { keywords }),
    authors: [{ name: 'Nabeel Sharafat', url: `${siteUrl}/about` }],
    creator: 'Nabeel Sharafat',
    publisher: siteName,
    applicationName: siteName,
    formatDetection: { email: false, address: false, telephone: false },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-image-preview': 'large',
      },
    },
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      type,
      locale: 'en_US',
      url: `${siteUrl}${path}`,
      siteName,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function generateProjectMetadata(project: Project): Metadata {
  return generateMetadata({
    title: `${project.title} — Project`,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
    image: project.images[0] ? `${siteUrl}${project.images[0]}` : undefined,
    type: 'article',
  });
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: 'en',
    publisher: { '@id': `${siteUrl}#organization` },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: defaultDescription,
    email: personal.email,
    founder: { '@id': `${siteUrl}#person` },
    sameAs: siteConfig.footer.socials
      .filter((item) => ['Upwork', 'Fiverr', 'GitHub'].includes(item.label))
      .map((item) => item.href),
    contactPoint: {
      '@type': 'ContactPoint',
      email: personal.email,
      contactType: 'sales',
      availableLanguage: 'English',
    },
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: 'Nabeel Sharafat',
    url: `${siteUrl}/about`,
    jobTitle: 'Python & Workflow Automation Developer',
    worksFor: { '@id': `${siteUrl}#organization` },
    knowsAbout: [
      'Python',
      'Browser automation',
      'Website data extraction',
      'Data pipelines',
      'n8n',
      'Make',
      'Zapier',
      'Lead enrichment and scoring',
      'Email classification',
      'Real estate public record extraction',
    ],
    sameAs: siteConfig.footer.socials
      .filter((item) => ['Upwork', 'Fiverr', 'GitHub'].includes(item.label))
      .map((item) => item.href),
  };
}
export function generateAboutPersonSchema() {
  return generatePersonSchema();
}

export function generateAutomationServiceSchema(service: AutomationService) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    url: `${siteUrl}/services/${service.slug}`,
    serviceType: service.title,
    category:
      service.category === 'specialist'
        ? 'Specialist workflow automation'
        : 'Data and browser automation',
    provider: { '@id': `${siteUrl}#organization` },
    areaServed: 'Worldwide',
  };
}
export function generateServicesSchema() {
  return automationServices.map(generateAutomationServiceSchema);
}

export function generateSystemServiceSchema(system: {
  slug: string;
  name: string;
  longDescription: string;
  priceLabel: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: system.name,
    description: system.longDescription,
    url: `${siteUrl}/systems/${system.slug}`,
    provider: { '@id': `${siteUrl}#organization` },
    areaServed: 'Worldwide',
  };
}

export function generateFAQPageSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
export function generateFAQSchema() {
  return generateFAQPageSchema(commonFAQs);
}

export function generateProjectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteUrl}/projects/${project.slug}#project`,
    name: project.title,
    description: project.fullDescription,
    url: `${siteUrl}/projects/${project.slug}`,
    creator: { '@id': `${siteUrl}#person` },
    genre: project.category,
    ...(project.images[0] && { image: `${siteUrl}${project.images[0]}` }),
  };
}
export function generateProjectArticleSchema(project: Project) {
  return generateProjectSchema(project);
}

export function generateBreadcrumbsSchema(
  items: { name: string; url: string }[],
) {
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
