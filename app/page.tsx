import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCheck,
  LockKeyhole,
  FileCheck2,
  Check,
} from 'lucide-react';
import { siteConfig, revampContent } from './config/site';
import { commonFAQs } from './config/services';
import { getAllPosts } from './lib/blog';
import { generateFAQPageSchema } from './lib/seo';
import WorkflowOutcomes from './components/WorkflowOutcomes';
import WorkflowVisual from './components/WorkflowVisual';
import WorkGrid from './components/WorkGrid';
import BlogCard from './components/BlogCard';
import Contact from './components/Contact';
import {
  FAQ,
  JsonLd,
  ProcessSteps,
  WorkflowCTA,
} from './components/PageElements';

export default async function Home() {
  const allPosts = await getAllPosts();
  const posts = revampContent.guides.flatMap((slug) => {
    const post = allPosts.find((item) => item.slug === slug);
    return post ? [post] : [];
  });
  const trustIcons = [LockKeyhole, FileCheck2, CheckCheck];
  return (
    <main id="main">
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">{revampContent.hero.eyebrow}</p>
              <h1>
                {revampContent.hero.title}{' '}
                <em>{revampContent.hero.emphasis}</em>
              </h1>
              <p className="lead">{revampContent.hero.description}</p>
              <div className="button-row">
                <Link href="/contact" className="button">
                  {revampContent.hero.primaryCta}
                  <ArrowUpRight size={17} />
                </Link>
                <a href="#services" className="text-link">
                  {revampContent.hero.secondaryCta}
                  <ArrowRight size={16} />
                </a>
              </div>
              <p className="hero-next-step">{revampContent.hero.nextStep}</p>
              <p className="availability">
                <span className="status-dot" />
                {siteConfig.personal.availability.message} · Work directly with
                Nabeel
              </p>
            </div>
            <WorkflowVisual />
          </div>
          <div className="hero-strip">
            {revampContent.hero.strip.map((item) => (
              <span key={item}>
                <Check size={14} />
                <strong>{item}</strong>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-line" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{revampContent.outcomes.eyebrow}</p>
              <h2>{revampContent.outcomes.title}</h2>
            </div>
            <p className="lead">{revampContent.outcomes.description}</p>
          </div>
          <WorkflowOutcomes />
          <p className="section-footnote">
            <Link className="text-link" href="/services">
              Explore all automation services <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </section>
      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>{revampContent.evidence.title}</h2>
            </div>
            <Link href="/projects" className="text-link">
              See all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="evidence-intro lead">
            {revampContent.evidence.description}
          </p>
          <WorkGrid />
          <div className="evidence-cta">
            <WorkflowCTA />
          </div>
        </div>
      </section>
      <section className="section section-line" id="process">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From manual to manageable</p>
              <h2>
                Start small. Get it right.
                <br />
                Then run it at scale.
              </h2>
            </div>
            <Link href="/process" className="text-link">
              How delivery works <ArrowRight size={16} />
            </Link>
          </div>
          <ProcessSteps />
        </div>
      </section>
      <section className="section section-tinted section-line">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Built with care</p>
              <h2>
                Your workflow.
                <br />
                Your data. Your control.
              </h2>
            </div>
            <p className="lead">
              Access and confidentiality are part of the plan from the first
              conversation.
            </p>
          </div>
          <div className="trust-grid">
            {revampContent.trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <div className="trust-item" key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Notes from the workbench</p>
              <h2>Before you automate.</h2>
            </div>
            <Link className="text-link" href="/blog">
              All practical guides <ArrowRight size={16} />
            </Link>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-line">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things you might be wondering</p>
              <h2>Before we get started.</h2>
            </div>
          </div>
          <FAQ items={commonFAQs} />
          <JsonLd data={generateFAQPageSchema(commonFAQs)} />
        </div>
      </section>
      <Contact />
    </main>
  );
}
