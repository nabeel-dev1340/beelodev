'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Bot, BarChart3, ShoppingCart, Smartphone, Zap, Activity, ArrowUpRight } from 'lucide-react';
import { projects } from '../config/projects';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Bot, BarChart3, ShoppingCart, Smartphone, Zap, Activity,
};

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.15 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <section className="py-16 sm:py-28 px-4 sm:px-6 relative" id="portfolio" ref={ref}>
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-sm font-mono text-electric-teal">PORTFOLIO</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Featured </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)' }}
                        >
                            Projects
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                        Real work. Real results. Here&apos;s what we&apos;ve built for clients around the world.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                {projects.length === 0 ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                        <p className="text-neutral-300 text-lg font-medium">No projects added yet.</p>
                        <p className="text-neutral-400 text-sm mt-2">
                            Add projects in <code>app/config/projects.ts</code> and they will appear here automatically.
                        </p>
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        variants={stagger}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {projects.map((project) => {
                            const Icon = project.icon ? iconMap[project.icon] : undefined;
                            return (
                                <motion.div
                                    key={project.slug}
                                    className="group relative rounded-2xl overflow-hidden"
                                    variants={fadeUp}
                                >
                                    {/* Card */}
                                    <motion.div
                                        className="relative h-full border border-white/6 rounded-2xl overflow-hidden bg-white/2"
                                        whileHover={{ borderColor: `${project.accent}33` }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Top gradient bar */}
                                        <div
                                            className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{ backgroundImage: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                                        />

                                        <div className="p-5 sm:p-8 flex flex-col h-full min-h-[330px]">
                                            {/* Top — Icon + Meta */}
                                            <div>
                                                {/* Icon */}
                                                {Icon && (
                                                    <motion.div
                                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                                                        style={{ backgroundColor: `${project.accent}15`, border: `1px solid ${project.accent}25` }}
                                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                                    >
                                                        <Icon className="w-6 h-6" style={{ color: project.accent }} />
                                                    </motion.div>
                                                )}

                                                {/* Category */}
                                                <div className="mb-3">
                                                    <span
                                                        className="text-xs font-mono uppercase tracking-wider"
                                                        style={{ color: project.accent }}
                                                    >
                                                        {project.category}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors line-clamp-2 min-h-16">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            {/* Bottom — Description + Metrics */}
                                            <div className="flex-1 flex flex-col">
                                                {/* Description */}
                                                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-4 min-h-20">
                                                    {project.shortDescription}
                                                </p>

                                                {/* Metric Pills */}
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.metrics.slice(0, 4).map((metric, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/4 border border-white/6 text-neutral-300"
                                                        >
                                                            {metric}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* CTA */}
                                                <div className="mt-auto flex flex-wrap items-center gap-3">
                                                    <Link
                                                        href={`/projects/${project.slug}`}
                                                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                                                        style={{ color: project.accent }}
                                                    >
                                                        View details
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </Link>
                                                    {project.liveUrl && (
                                                        <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200"
                                                            style={{ color: project.accent, borderColor: `${project.accent}40`, backgroundColor: `${project.accent}12` }}
                                                        >
                                                            Live site
                                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover glow — bottom-right radial */}
                                        <div
                                            className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                                            style={{ backgroundColor: project.accent }}
                                        />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl text-sm font-semibold text-white"
                        whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Have a project in mind? Let&apos;s talk
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
