import { siteConfig } from '../config/site';
import { Breadcrumbs } from '../components/PageElements';
import { generateMetadata as seo } from '../lib/seo';

export const metadata = seo({
  title: 'Privacy & Inquiry Data',
  description:
    'How Beelodev handles workflow inquiries, website analytics, and your theme preference.',
  path: '/privacy',
});
export default function PrivacyPage() {
  return (
    <main id="main" className="article-container">
      <Breadcrumbs items={[{ name: 'Privacy' }]} />
      <header className="article-header">
        <p className="eyebrow">Privacy</p>
        <h1>Your inquiry and this website.</h1>
        <p className="lead">
          This page describes the information used by the site and its inquiry form.
        </p>
      </header>
      <div className="blog-content">
        <h2>Workflow inquiries</h2>
        <p>
          The form collects your name, email, selected service, system, approximate volume,
          deadline, and workflow description. It sends these details to Beelodev by email through
          Resend so Nabeel can assess and respond to the inquiry. The email also notes the page where
          your visit began and the site that referred you, so we can see how people find Beelodev.
        </p>
        <p>
          Please leave passwords, access tokens, and confidential client records out of the form.
          Any sensitive access needed for a project is arranged separately. An NDA can be discussed
          before sharing confidential sample data.
        </p>
        <h2>Website analytics</h2>
        <p>
          This site uses Vercel Analytics to understand website use. Vercel may receive technical
          information such as pages visited and device details.
        </p>
        <h2>Booking a call</h2>
        <p>
          Calls are scheduled through Calendly, including the calendar embedded on the contact page.
          Calendly processes the details you enter and may set its own cookies when that calendar
          loads.
        </p>
        <h2>Theme preference</h2>
        <p>
          Your light or dark theme choice is stored in your browser’s local storage. It is used to
          restore your preferred appearance when you return.
        </p>
        <h2>Questions and requests</h2>
        <p>
          For questions about your inquiry data, or to request its removal, contact{' '}
          <a href={`mailto:${siteConfig.personal.email}`}>{siteConfig.personal.email}</a>.
        </p>
      </div>
    </main>
  );
}
