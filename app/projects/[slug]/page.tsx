import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../../config/projects';
import ProjectImageGallery from './ProjectImageGallery';

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <section className="min-h-screen py-12 sm:py-20 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
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
                    <p className="text-neutral-300 leading-relaxed mb-8">
                        {project.fullDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.metrics.map((metric) => (
                            <span
                                key={metric}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-neutral-200"
                            >
                                {metric}
                            </span>
                        ))}
                    </div>

                    {project.images.length > 0 && <ProjectImageGallery images={project.images} title={project.title} />}
                </div>
            </div>
        </section>
    );
}
