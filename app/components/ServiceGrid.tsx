import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  coreAutomationServices,
  type AutomationService,
} from '../config/services';

export default function ServiceGrid({
  headingLevel = 'h3',
  services = coreAutomationServices,
}: {
  headingLevel?: 'h2' | 'h3';
  services?: AutomationService[];
}) {
  const Heading = headingLevel;
  return (
    <div className="service-grid">
      {services.map((service) => (
        <Link
          href={`/services/${service.slug}`}
          key={service.slug}
          className="service-card"
        >
          <div className="service-card-top">
            <span className="service-number">/{service.number}</span>
            <ArrowUpRight size={21} aria-hidden="true" />
          </div>
          <Heading>{service.title}</Heading>
          <p className="service-problem">{service.problem}</p>
          <p>{service.outcome}</p>
          <span className="text-link">
            Explore this service <ArrowRight size={15} aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  );
}
