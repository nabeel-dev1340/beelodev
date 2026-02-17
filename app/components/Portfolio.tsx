'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, BarChart3, ShoppingCart, Smartphone, Zap, Activity, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const projects = [
        {
            title: 'AI Voice Agent Platform',
            category: 'AI Automation',
            description: 'Built a custom voice AI system that handles customer support calls 24/7, reducing response times by 80% and saving $120K/year in staffing costs.',
            icon: Bot,
            metrics: ['24/7 uptime', '80% faster', '$120K saved'],
            accent: '#0ea5e9',
            featured: true,
        },
        {
            title: 'Analytics Dashboard',
            category: 'Full Stack',
            description: 'Real-time analytics platform processing 1M+ events per day with instant insights and custom reporting.',
            icon: BarChart3,
            metrics: ['1M+ events/day', '99.9% uptime'],
            accent: '#06b6d4',
            featured: false,
        },
        {
            title: 'E-Commerce Store',
            category: 'WordPress',
            description: 'High-converting WooCommerce store with custom checkout flow, resulting in 35% increase in conversions.',
            icon: ShoppingCart,
            metrics: ['+35% conversions', '2s load time'],
            accent: '#14b8a6',
            featured: false,
        },
        {
            title: 'Fitness Tracking App',
            category: 'Mobile',
            description: 'Cross-platform React Native app with workout tracking, social features, and 50K+ downloads.',
            icon: Smartphone,
            metrics: ['50K+ downloads', '4.8★ rating'],
            accent: '#0ea5e9',
            featured: true,
        },
        {
            title: 'Workflow Automation',
            category: 'AI Automation',
            description: 'Zapier-style automation platform for SMBs, connecting 50+ SaaS tools with intelligent triggers.',
            icon: Zap,
            metrics: ['50+ integrations', '10K tasks/day'],
            accent: '#06b6d4',
            featured: false,
        },
        {
            title: 'Health Monitoring',
            category: 'Full Stack',
            description: 'IoT-connected health tracking dashboard with real-time vitals monitoring and alert system.',
            icon: Activity,
            metrics: ['Real-time data', 'HIPAA compliant'],
            accent: '#14b8a6',
            featured: false,
        },
    ];

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

                {/* Projects Grid — Asymmetric Bento */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                                }`}
                            variants={fadeUp}
                        >
                            {/* Card */}
                            <motion.div
                                className="relative h-full border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02]"
                                whileHover={{ borderColor: `${project.accent}33` }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Top gradient bar */}
                                <div
                                    className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                                />

                                <div className={`p-5 sm:p-8 ${project.featured ? 'md:flex md:items-start md:gap-10' : ''}`}>
                                    {/* Left — Icon + Meta */}
                                    <div className={`${project.featured ? 'md:flex-shrink-0' : ''}`}>
                                        {/* Icon */}
                                        <motion.div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                                            style={{ backgroundColor: `${project.accent}15`, border: `1px solid ${project.accent}25` }}
                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        >
                                            <project.icon className="w-6 h-6" style={{ color: project.accent }} />
                                        </motion.div>

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
                                        <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Right — Description + Metrics */}
                                    <div className="flex-1">
                                        {/* Description */}
                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Metric Pills */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.metrics.map((metric, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-neutral-300"
                                                >
                                                    {metric}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <motion.a
                                            href="#contact"
                                            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                                            style={{ color: project.accent }}
                                            whileHover={{ gap: '0.75rem' }}
                                        >
                                            View details
                                            <ArrowUpRight className="w-4 h-4" />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Hover glow — bottom-right radial */}
                                <div
                                    className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                                    style={{ backgroundColor: project.accent }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

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
