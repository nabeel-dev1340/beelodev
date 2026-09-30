import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generatePersonSchema,
} from '../lib/seo';
import { JsonLd } from './PageElements';

export default function StructuredData() {
  const schemas = [generateWebSiteSchema(), generateOrganizationSchema(), generatePersonSchema()];
  const graph = schemas.map((schema) => {
    const result: Record<string, unknown> = { ...schema };
    delete result['@context'];
    return result;
  });
  return <JsonLd data={{ '@context': 'https://schema.org', '@graph': graph }} />;
}
