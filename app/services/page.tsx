import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServiceGrid from '../components/ServiceGrid';
import SpecialistServices from '../components/SpecialistServices';
import { automationServices } from '../config/services';
import { Breadcrumbs, WorkflowCTA, JsonLd } from '../components/PageElements';
import {
  generateMetadata as seo,
  generateBreadcrumbsSchema,
  siteUrl,
} from '../lib/seo';

export const metadata = seo({
  title: 'Python, Web Scraping & Workflow Automation Services',
  description:
    'Custom Python, web scraping, n8n, and Make automation from Nabeel Sharafat. Document downloads, data exports, lead scoring, email routing, and Notion reports.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs items={[{ name: 'Services' }]} />
        <p className="eyebrow">Custom automation services</p>
        <h1>Get repetitive work off your team’s plate.</h1>
        <p className="lead">
          Get requests routed, research organized, reports prepared, and data
          delivered. Explore a workflow that fits, then agree on the result and
          a small pilot before the full build.
        </p>
      </div>
      <section className="container" aria-label="Automation services">
        <ServiceGrid headingLevel="h2" />
      </section>
      <section
        className="section container"
        id="specialist-workflows"
        aria-labelledby="specialist-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Specialist workflows</p>
            <h2 id="specialist-heading">
              A closer fit for the task on your list.
            </h2>
          </div>
          <p className="lead">
            Focused offers for research, sales operations, inboxes, and
            reporting. Explore the scope and the implementation behind each one.
          </p>
        </div>
        <SpecialistServices />
        <p className="section-footnote">
          Looking for chatbots, invoice processing, or AI workflows?{' '}
          <Link className="text-link" href="/systems">
            Other automations <ArrowRight size={15} />
          </Link>
        </p>
      </section>
      <section className="section container">
        <WorkflowCTA />
      </section>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Beelodev automation services',
          itemListElement: automationServices.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.title,
            url: `${siteUrl}/services/${service.slug}`,
          })),
        }}
      />
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ])}
      />
    </main>
  );
}
