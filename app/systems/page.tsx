import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { systems } from '../config/systems';
import { Breadcrumbs, WorkflowCTA } from '../components/PageElements';
import { generateMetadata as seo } from '../lib/seo';

export const metadata = seo({
  title: 'Other Business Automations — AI & Connected Workflows',
  description:
    'Explore AI support agents, website chatbots, invoice processing, and document workflows alongside Beelodev’s core Python and browser automation services.',
  path: '/systems',
});
export default function SystemsPage() {
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs items={[{ name: 'Other automations' }]} />
        <p className="eyebrow">More ways to remove repetitive work</p>
        <h1>
          A different task?
          <br />
          Let’s find the right workflow.
        </h1>
        <p className="lead">
          The core services focus on files, data, and portals. I also build connected workflows and
          scoped AI integrations when they fit your process.
        </p>
        <div className="button-row">
          <Link className="text-link" href="/services">
            Explore the four core services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <section className="container service-grid" aria-label="Other automation services">
        {systems.map((system, i) => (
          <Link className="service-card" href={`/systems/${system.slug}`} key={system.slug}>
            <div className="service-card-top">
              <span className="service-number">0{i + 1}</span>
              <ArrowUpRight size={20} />
            </div>
            <h2>{system.name}</h2>
            <p>{system.longDescription}</p>
            <span className="text-link">
              Explore the workflow <ArrowUpRight size={15} />
            </span>
          </Link>
        ))}
      </section>
      <section className="container section">
        <WorkflowCTA />
      </section>
    </main>
  );
}
