import Link from 'next/link';
import { automationServices } from '../config/services';
import { systems } from '../config/systems';
import { projects } from '../config/projects';
import { getAllPosts } from '../lib/blog';
import { Breadcrumbs } from '../components/PageElements';
import { generateMetadata as seo } from '../lib/seo';

export const metadata = seo({
  title: 'Sitemap',
  description:
    'Find Beelodev automation services, project work, practical guides, and planning tools.',
  path: '/sitemap-page',
});
export default async function SitemapPage() {
  const posts = await getAllPosts();
  const groups = [
    {
      title: 'Explore',
      links: [
        '/services',
        '/projects',
        '/process',
        '/about',
        '/blog',
        '/contact',
        '/privacy',
      ].map((href) => ({ href, label: href.slice(1) })),
    },
    {
      title: 'Automation services and specialist workflows',
      links: automationServices.map((item) => ({
        href: `/services/${item.slug}`,
        label: item.title,
      })),
    },
    {
      title: 'Other automations',
      links: systems.map((item) => ({
        href: `/systems/${item.slug}`,
        label: item.name,
      })),
    },
    {
      title: 'Project work',
      links: projects.map((item) => ({
        href: `/projects/${item.slug}`,
        label: item.title,
      })),
    },
    {
      title: 'Practical guides',
      links: posts.map((item) => ({
        href: `/blog/${item.slug}`,
        label: item.title,
      })),
    },
    {
      title: 'Planning tools',
      links: [
        { href: '/support-cost-calculator', label: 'Support cost calculator' },
        {
          href: '/invoice-processing-cost-calculator',
          label: 'Invoice processing cost calculator',
        },
        {
          href: '/document-intelligence-cost-calculator',
          label: 'Document handling cost calculator',
        },
      ],
    },
  ];
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs items={[{ name: 'Sitemap' }]} />
        <p className="eyebrow">Find your way</p>
        <h1>Everything in one place.</h1>
      </div>
      <div className="container section detail-layout">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 style={{ fontSize: '1.6rem' }}>{group.title}</h2>
            <ul className="check-list">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="text-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
