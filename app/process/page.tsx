import { commonFAQs } from '../config/services';
import { Breadcrumbs, ProcessSteps, FAQ, JsonLd, WorkflowCTA } from '../components/PageElements';
import {
  generateMetadata as seo,
  generateBreadcrumbsSchema,
  generateFAQPageSchema,
} from '../lib/seo';

export const metadata = seo({
  title: 'How Custom Automation Delivery Works',
  description:
    'Walkthrough, representative pilot, full implementation, and documented handover. See how Beelodev scopes and delivers custom Python and browser automation.',
  path: '/process',
});
export default function ProcessPage() {
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs items={[{ name: 'Process' }]} />
        <p className="eyebrow">A practical path to automation</p>
        <h1>
          Understand the task.
          <br />
          Prove the workflow.
          <br />
          Hand it over.
        </h1>
        <p className="lead">
          A clear output and a small pilot give us a useful starting point. The full build follows a
          scope we agree on together.
        </p>
      </div>
      <section className="section section-line">
        <div className="container">
          <ProcessSteps headingLevel="h2" />
        </div>
      </section>
      <section className="section section-tinted section-line">
        <div className="container detail-layout">
          <div>
            <h2>
              Bring the process.
              <br />
              I’ll bring the questions.
            </h2>
            <p className="lead">
              A short screen recording or a live walkthrough is ideal. You don’t need a technical
              specification.
            </p>
          </div>
          <ul className="check-list">
            <li>01 — The system, website, or portal involved.</li>
            <li>02 — The steps you repeat and how often.</li>
            <li>03 — A representative sample, with sensitive data removed.</li>
            <li>04 — What a correct output looks like.</li>
            <li>05 — Approximate volume and your deadline.</li>
          </ul>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <h2>Scope, access, and handover.</h2>
        </div>
        <FAQ items={commonFAQs} />
      </section>
      <section className="container section">
        <WorkflowCTA />
      </section>
      <JsonLd data={generateFAQPageSchema(commonFAQs)} />
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Process', url: '/process' },
        ])}
      />
    </main>
  );
}
