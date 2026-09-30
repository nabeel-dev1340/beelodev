import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { siteConfig, revampContent } from '../config/site';
import { Breadcrumbs, JsonLd, WorkflowCTA } from '../components/PageElements';
import {
  generateMetadata as seo,
  generateAboutPersonSchema,
  generateBreadcrumbsSchema,
} from '../lib/seo';

export const metadata = seo({
  title: 'Nabeel Sharafat — Python & Workflow Automation Developer',
  description:
    'Meet Nabeel, the developer behind Beelodev. Custom Python scripts, website data collection, and browser automation for business workflows. Based in Pakistan, working worldwide.',
  path: '/about',
});
export default function AboutPage() {
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs items={[{ name: 'About' }]} />
        <p className="eyebrow">Hi, I’m Nabeel Sharafat.</p>
        <h1>{revampContent.about.intro}</h1>
        <p className="lead">{revampContent.about.description}</p>
      </div>
      <section className="section section-line">
        <div className="container about-layout">
          <div>
            <p>{revampContent.about.approach}</p>
            <p>
              There’s usually a better way than opening every record,
              downloading each attachment, or copying the same data every
              morning. The useful part is figuring out exactly what your team
              needs and making the result reliable enough to use.
            </p>
            <p>
              You work directly with me through discovery, implementation, and
              handover. I’ll explain what’s feasible, what needs a pilot, and
              what should stay in a person’s hands.
            </p>
            <Link href="/projects" className="text-link">
              Explore my project work <ArrowUpRight size={16} />
            </Link>
          </div>
          <aside className="about-aside">
            <h2>Find me elsewhere.</h2>
            <p className="small">View my project history and profiles.</p>
            {siteConfig.footer.socials
              .filter((item) =>
                ['Upwork', 'Fiverr', 'GitHub'].includes(item.label),
              )
              .map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            <p className="small" style={{ marginTop: 24 }}>
              {siteConfig.personal.location}
            </p>
          </aside>
        </div>
      </section>
      <section className="container section">
        <WorkflowCTA />
      </section>
      <JsonLd data={generateAboutPersonSchema()} />
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ])}
      />
    </main>
  );
}
