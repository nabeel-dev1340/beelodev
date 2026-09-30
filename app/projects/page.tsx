import WorkGrid from '../components/WorkGrid';
import { Breadcrumbs, WorkflowCTA, JsonLd } from '../components/PageElements';
import { generateMetadata as seo, generateBreadcrumbsSchema } from '../lib/seo';

export const metadata = seo({
  title: 'Automation Projects & Data Extraction Work',
  description:
    'Explore Nabeel’s Python data collection, website classification, and business workflow automation projects, with real screenshots and implementation details.',
  path: '/projects',
});
export default function ProjectsPage() {
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs items={[{ name: 'Projects' }]} />
        <p className="eyebrow">The work behind the services</p>
        <h1>
          Built for a real task.
          <br />
          Delivered for a real team.
        </h1>
        <p className="lead">
          Python data pipelines, structured exports, and connected workflows. Explore what was built
          and where it fits.
        </p>
      </div>
      <section className="container" aria-label="Project portfolio">
        <WorkGrid all />
      </section>
      <section className="container section">
        <WorkflowCTA />
      </section>
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
        ])}
      />
    </main>
  );
}
