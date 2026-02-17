'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Code, Smartphone, Globe, ArrowUpRight } from 'lucide-react';

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const services = [
        {
            icon: Bot,
            title: 'AI Automation',
            description: 'Intelligent agents and workflows that eliminate repetitive tasks and work around the clock.',
            deliverables: ['Custom AI Chatbots', 'Voice Agents', 'Workflow Automation', 'CRM Integration'],
            accent: '#0ea5e9',
            stat: '30+ hrs/week saved',
        },
        {
            icon: Code,
            title: 'Full Stack Development',
            description: 'End-to-end web applications built with modern frameworks and scalable architecture.',
            deliverables: ['React / Next.js', 'Node.js APIs', 'PostgreSQL', 'Cloud Deploy'],
            accent: '#06b6d4',
            stat: '99.9% uptime',
        },
        {
            icon: Globe,
            title: 'WordPress Development',
            description: 'Fast, beautiful, SEO-optimized websites that convert visitors into customers.',
            deliverables: ['Custom Themes', 'WooCommerce', 'SEO Optimization', 'Speed Tuning'],
            accent: '#14b8a6',
            stat: '<2s load time',
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            description: 'Cross-platform mobile apps that feel native on both iOS and Android.',
            deliverables: ['React Native', 'iOS & Android', 'Push Notifications', 'App Store Launch'],
            accent: '#0ea5e9',
            stat: '50K+ downloads',
        },
    ];

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <section className="py-16 sm:py-28 px-4 sm:px-6 relative" id="services" ref={ref}>
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
                        <span className="text-sm font-mono text-electric-blue">WHAT WE DO</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Our </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)' }}
                        >
                            Services
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-lg mx-auto">
                        Everything you need to build, launch, and scale your digital product.
                    </p>
                </motion.div>

                {/* Services Grid — 2×2 */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden"
                            variants={fadeUp}
                        >
                            <div className="relative h-full border border-white/[0.06] rounded-2xl bg-white/[0.02] p-5 sm:p-8 transition-colors duration-300 hover:border-white/[0.12]">

                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
                                />

                                {/* Row 1: Icon + Stat */}
                                <div className="flex items-start justify-between mb-5">
                                    <motion.div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${service.accent}15`, border: `1px solid ${service.accent}20` }}
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    >
                                        <service.icon className="w-6 h-6" style={{ color: service.accent }} />
                                    </motion.div>

                                    <span
                                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-neutral-400"
                                    >
                                        {service.stat}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-2xl font-bold text-white mb-3">{service.title}</h3>

                                {/* Description */}
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{service.description}</p>

                                {/* Deliverables — horizontal */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.deliverables.map((d, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-white/[0.04] border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.12]"
                                        >
                                            {d}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <motion.a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                                    style={{ color: service.accent }}
                                    whileHover={{ gap: '0.75rem' }}
                                >
                                    Learn more
                                    <ArrowUpRight className="w-4 h-4" />
                                </motion.a>

                                {/* Hover glow */}
                                <div
                                    className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                                    style={{ backgroundColor: service.accent }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
