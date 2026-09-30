import { getAllPosts } from '../lib/blog';
import BlogExplorer from '../components/BlogExplorer';
import { Breadcrumbs, JsonLd, WorkflowCTA } from '../components/PageElements';
import { generateMetadata as seo, generateBreadcrumbsSchema, siteUrl } from '../lib/seo';

export const metadata = seo({
  title: 'Practical Guides to Data & Browser Automation',
  description:
    'Plan bulk document downloads, legacy data exports, website data collection, and portal workflows. Practical guides from Nabeel at Beelodev.',
  path: '/blog',
});
export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <main id="main">
      <div className="container page-intro">
        <Breadcrumbs items={[{ name: 'Blog' }]} />
        <p className="eyebrow">Notes from the workbench</p>
        <h1>
          Make the next manual task
          <br />
          your last.
        </h1>
        <p className="lead">
          Practical guides to planning automation, checking the output, and knowing what to ask
          before a build.
        </p>
      </div>
      <section className="container" aria-label="Automation guides">
        <BlogExplorer posts={posts} />
      </section>
      <section className="container section">
        <WorkflowCTA />
      </section>
      <JsonLd
        data={generateBreadcrumbsSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Beelodev automation guides',
          url: `${siteUrl}/blog`,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: posts.map((post, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: post.title,
              url: `${siteUrl}/blog/${post.slug}`,
            })),
          },
        }}
      />
    </main>
  );
}
