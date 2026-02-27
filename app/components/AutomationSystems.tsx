'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Bot, Receipt, FileText, CheckCircle2, Calendar } from 'lucide-react';
import { siteConfig } from '../config/site';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Bot, Receipt, FileText,
};

export default function AutomationSystems() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const { title, systems } = siteConfig.automationSystems;
    const bookingUrl = siteConfig.personal.booking.url;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden" id="systems" ref={ref}>
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-sm font-mono text-electric-blue">SYSTEMS OVER TASKS</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
                        <span className="text-white">{title}</span>
                    </h2>
                </motion.div>

                {/* Systems Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {systems.map((system, index) => {
                        const Icon = iconMap[system.icon];
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative h-full"
                            >
                                <div className="h-full flex flex-col p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1]">
                                    {/* Icon & Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                                            style={{
                                                backgroundColor: `${system.accent}15`,
                                                border: `1px solid ${system.accent}30`,
                                                boxShadow: `0 0 20px ${system.accent}10`
                                            }}
                                        >
                                            {Icon && <Icon className="w-7 h-7" style={{ color: system.accent }} />}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="font-display text-2xl font-bold text-white mb-4">
                                            {system.name}
                                        </h3>
                                        <p className="text-lg text-neutral-300 font-medium leading-relaxed mb-8">
                                            {system.shortHeadline}
                                        </p>

                                        {/* Bullets */}
                                        <ul className="space-y-4 mb-8">
                                            {system.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-start gap-3 text-neutral-400">
                                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: system.accent }} />
                                                    <span className="text-sm leading-relaxed">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-6 border-t border-white/[0.08] mt-2">
                                        <p className="text-sm font-mono font-medium tracking-wide flex items-center gap-2" style={{ color: system.accent }}>
                                            <span className="opacity-80">{system.closingLine}</span>
                                        </p>

                                        <Link
                                            href={`/systems/${system.slug}`}
                                            className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold border"
                                            style={{ color: system.accent, borderColor: `${system.accent}40`, backgroundColor: `${system.accent}12` }}
                                        >
                                            View details
                                        </Link>

                                        <a
                                            href={bookingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <Calendar className="w-4 h-4" style={{ color: system.accent }} />
                                            Book a Free Discovery Call
                                        </a>
                                    </div>

                                    {/* Hover specific glow */}
                                    <div
                                        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: `linear-gradient(180deg, ${system.accent}20 0%, transparent 100%)`
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
