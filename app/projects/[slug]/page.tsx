import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../../config/projects';
import ProjectImageGallery from './ProjectImageGallery';
import {
    generateProjectMetadata,
    generateProjectSchema,
    generateBreadcrumbsSchema,
    siteUrl,
    siteName,
} from '../../lib/seo';

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return { title: 'Project Not Found', robots: { index: false, follow: false } };
    }

    return generateProjectMetadata(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    const breadcrumbSchema = generateBreadcrumbsSchema([
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/#portfolio' },
        { name: project.title, url: `/projects/${project.slug}` },
    ]);

    const projectSchema = generateProjectSchema(project);

    return (
        <>
            {/* Project-level structured data injected into the page's <head> */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
            />

            <article className="min-h-screen py-12 sm:py-20 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Visible breadcrumb navigation — reinforces hierarchy for crawlers */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-1.5 text-xs text-neutral-500" itemScope itemType="https://schema.org/BreadcrumbList">
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <Link href="/" className="hover:text-neutral-300 transition-colors" itemProp="item">
                                    <span itemProp="name">Home</span>
                                </Link>
                                <meta itemProp="position" content="1" />
                            </li>
                            <li aria-hidden="true" className="text-neutral-700">/</li>
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <Link href="/#portfolio" className="hover:text-neutral-300 transition-colors" itemProp="item">
                                    <span itemProp="name">Portfolio</span>
                                </Link>
                                <meta itemProp="position" content="2" />
                            </li>
                            <li aria-hidden="true" className="text-neutral-700">/</li>
                            <li
                                className="text-neutral-400 truncate max-w-[160px] sm:max-w-none"
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <span itemProp="name">{project.title}</span>
                                <meta itemProp="position" content="3" />
                                <meta itemProp="item" content={`${siteUrl}/projects/${project.slug}`} />
                            </li>
                        </ol>
                    </nav>

                    <Link
                        href="/#portfolio"
                        className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to portfolio
                    </Link>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
                        <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: project.accent }}>
                            {project.category}
                        </p>
                        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5">
                            {project.title}
                        </h1>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium mb-6"
                                style={{ color: project.accent }}
                            >
                                Visit live project
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}

                        {/* Main content — wrapped in a semantic section for better content signals */}
                        <section aria-label="Project description">
                            <p className="text-neutral-300 leading-relaxed mb-8">
                                {project.fullDescription}
                            </p>
                        </section>

                        <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Project metrics">
                            {project.metrics.map((metric) => (
                                <span
                                    key={metric}
                                    role="listitem"
                                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-neutral-200"
                                >
                                    {metric}
                                </span>
                            ))}
                        </div>

                        {project.images.length > 0 && (
                            <ProjectImageGallery images={project.images} title={project.title} />
                        )}
                    </div>

                    {/* Footer CTA — internal link equity back to homepage */}
                    <div className="mt-12 text-center">
                        <p className="text-neutral-400 text-sm mb-4">
                            Interested in a similar system for your business?
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            Book a Free Discovery Call
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}
