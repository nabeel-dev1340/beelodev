import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../config/projects';
import { revampContent } from '../config/site';

export default function WorkGrid({ all = false }: { all?: boolean }) {
  const Heading = all ? 'h2' : 'h3';
  const work = all
    ? projects
    : revampContent.evidence.projects.flatMap((slug) => {
        const project = projects.find((item) => item.slug === slug);
        return project ? [project] : [];
      });
  return (
    <div className="work-grid">
      {work.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.slug}
          className="project-card"
        >
          <div className="project-image">
            <Image
              src={project.images[0]}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(max-width: 540px) 100vw, (max-width: 800px) 50vw, 650px"
            />
          </div>
          <div className="project-kicker">{project.category}</div>
          <Heading>{project.title}</Heading>
          <p>
            {!all && project.outcome
              ? project.outcome
              : project.shortDescription}
          </p>
          {project.contribution && (
            <p className="contribution">
              <strong>My contribution:</strong> {project.contribution}
            </p>
          )}
          <span className="text-link">
            See the project <ArrowUpRight size={15} />
          </span>
        </Link>
      ))}
    </div>
  );
}
