import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../config/projects';
import { automationServices } from '../../config/services';
import { Breadcrumbs, JsonLd, WorkflowCTA } from '../../components/PageElements';
import {
  generateProjectMetadata,
  generateProjectSchema,
  generateBreadcrumbsSchema,
} from '../../lib/seo';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? generateProjectMetadata(project)
    : { title: 'Project not found', robots: { index: false } };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const related = automationServices.filter((service) => project.services?.includes(service.slug));
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs items={[{ name: 'Projects', href: '/projects' }, { name: project.title }]} />
        <p className="eyebrow">{project.category} · Project</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.shortDescription}</p>
        <div className="project-facts">
          {project.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>
      <section className="section section-line">
        <div className="container detail-layout">
          <div>
            <h2>The implementation.</h2>
            <p className="muted">{project.fullDescription}</p>
          </div>
          <div>
            {project.contribution && (
              <>
                <h3>My contribution</h3>
                <p className="scope-note">{project.contribution}</p>
              </>
            )}
            {project.liveUrl && (
              <a
                className="text-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the live project <ArrowUpRight size={15} />
              </a>
            )}
            {related.length > 0 && (
              <div className="scope-note">
                <strong>Related service</strong>
                {related.map((service) => (
                  <Link key={service.slug} className="text-link" href={`/services/${service.slug}`}>
                    {service.title} <ArrowUpRight size={15} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="container project-detail-images" aria-label="Project screenshots">
        {project.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${project.title} — implementation screenshot ${i + 1}`}
            width={1600}
            height={1000}
            sizes="(max-width: 800px) 100vw, 1200px"
            className="project-detail-image"
          />
        ))}
      </section>
      <section className="container section">
        <WorkflowCTA />
      </section>
      <JsonLd data={generateProjectSchema(project)} />
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: project.title, url: `/projects/${slug}` },
        ])}
      />
    </main>
  );
}
