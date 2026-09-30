import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { automationServices } from '../config/services';
import { revampContent } from '../config/site';

export default function WorkflowOutcomes() {
  return (
    <div className="outcome-grid">
      {revampContent.outcomes.groups.map((group, index) => (
        <article key={group.title} className="outcome-group">
          <span className="service-number">/0{index + 1}</span>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
          <ul className="outcome-links">
            {group.services.map((slug) => {
              const service = automationServices.find(
                (item) => item.slug === slug,
              );
              return service ? (
                <li key={slug}>
                  <Link href={`/services/${slug}`}>
                    {service.title}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </article>
      ))}
    </div>
  );
}
