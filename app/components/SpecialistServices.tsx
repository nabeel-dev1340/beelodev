import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { specialistAutomationServices } from '../config/services';

export default function SpecialistServices() {
  return (
    <div className="specialist-services">
      {specialistAutomationServices.map((service) => (
        <article key={service.slug} className="specialist-service">
          <span className="service-number">/{service.number}</span>
          <div>
            <h3>
              <Link href={`/services/${service.slug}`}>
                {service.title} <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </h3>
            <p>{service.problem}</p>
            <p className="small muted">{service.outcome}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
