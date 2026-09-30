import Contact from '../components/Contact';
import { automationServices } from '../config/services';
import { Breadcrumbs } from '../components/PageElements';
import { generateMetadata as seo } from '../lib/seo';

export const metadata = seo({
  title: 'Discuss Your Manual Workflow',
  description:
    'Tell Nabeel about the portal, document archive, data export, or repetitive task you want to automate. Start with a clear scope and a small pilot.',
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
    </main>
  );
}
