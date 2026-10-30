import Contact from '../components/Contact';
import { automationServices } from '../config/services';
import { bookingUrl, siteConfig } from '../config/site';
import { Breadcrumbs } from '../components/PageElements';
import { generateMetadata as seo } from '../lib/seo';

export const metadata = seo({
  title: 'Discuss Your Manual Workflow',
  description:
    'Tell Nabeel about the task you want to automate, or book a 30 minute call. Start with a clear scope and a small pilot before the full build.',
  path: '/contact',
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const initialService = automationServices.some((item) => item.slug === service)
    ? service
    : service === 'other'
      ? 'other'
      : '';
  return (
    <main id="main">
      <div className="container" style={{ paddingTop: 35 }}>
        <Breadcrumbs items={[{ name: 'Contact' }]} />
      </div>
      <Contact initialService={initialService} standalone />
      <section
        className="section section-tinted section-line"
        id="book"
        aria-labelledby="book-heading"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Prefer to talk it through?</p>
              <h2 id="book-heading">Pick a time for a 30 minute call.</h2>
            </div>
            <p className="lead">{siteConfig.personal.booking.description}</p>
          </div>
          <iframe
            className="booking-embed"
            src={`${bookingUrl('contact-embed')}&embed_domain=${siteConfig.personal.domain}&embed_type=Inline&hide_gdpr_banner=1`}
            title="Book a 30 minute call with Nabeel"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
