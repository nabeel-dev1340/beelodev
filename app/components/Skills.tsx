'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Database, Smartphone, Globe, Cloud, Layers } from 'lucide-react';
import { siteConfig } from '../config/site';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Code2, Cpu, Database, Smartphone, Globe, Cloud,
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const { categories, highlights, extraTools, extraToolsMore } = siteConfig.skills;

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.1 }
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
        <section className="py-16 sm:py-28 px-4 sm:px-6 relative" id="skills" ref={ref}>
            <div className="max-w-7xl mx-auto">

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
                        <Layers className="w-3.5 h-3.5 text-electric-cyan" />
                        <span className="text-sm font-mono text-electric-cyan">TECH STACK</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Skills & </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)' }}
                        >
                            Expertise
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                        Battle-tested across hundreds of real-world projects.
                    </p>
                </motion.div>

                {/* Highlight Stats */}
                <motion.div
                    className="grid grid-cols-3 max-w-md mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    {highlights.map((h, i) => (
                        <div key={i} className="text-center relative">
                            {i > 0 && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />}
                            <div
                                className="text-3xl font-display font-bold bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
                            >
                                {h.number}
                            </div>
                            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">{h.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Skills Categories Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {categories.map((cat, index) => {
                        const Icon = iconMap[cat.icon];
                        return (
                            <motion.div
                                key={index}
                                className="group relative rounded-2xl overflow-hidden"
                                variants={fadeUp}
                            >
                                <div className="relative h-full border border-white/[0.06] rounded-2xl bg-white/[0.02] p-5 sm:p-7 transition-colors duration-300 hover:border-white/[0.12]">

                                    {/* Top accent line on hover */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ backgroundImage: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
                                    />

                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <motion.div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{ backgroundColor: `${cat.accent}15`, border: `1px solid ${cat.accent}20` }}
                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        >
                                            {Icon && <Icon className="w-5 h-5" style={{ color: cat.accent }} />}
                                        </motion.div>
                                        <h3 className="font-display text-lg font-bold text-white">{cat.title}</h3>
                                    </div>

                                    {/* Tool Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {cat.tools.map((tool, i) => (
                                            <motion.span
                                                key={i}
                                                className="px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-white/[0.04] border border-white/[0.06] transition-all duration-300"
                                                whileHover={{
                                                    backgroundColor: `${cat.accent}18`,
                                                    borderColor: `${cat.accent}40`,
                                                    color: '#ffffff',
                                                }}
                                            >
                                                {tool}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Hover glow */}
                                    <div
                                        className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                                        style={{ backgroundColor: cat.accent }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom: Logos / "And more" */}
                <motion.div
                    className="text-center mt-14"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        {extraTools.map((tool, i) => (
                            <span key={i} className="px-3 py-1 rounded-full text-xs text-neutral-600 border border-white/[0.04]">
                                {tool}
                            </span>
                        ))}
                        <span className="px-3 py-1 rounded-full text-xs text-neutral-500 border border-white/[0.06] bg-white/[0.03]">
                            {extraToolsMore}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
