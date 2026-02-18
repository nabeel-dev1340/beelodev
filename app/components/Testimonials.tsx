'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const { items: testimonials, aggregateRating, aggregateLabel, trustBanner } = siteConfig.testimonials;

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.1 }
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
        <section className="py-16 sm:py-28 px-4 sm:px-6 relative" id="testimonials" ref={ref}>
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Star className="w-3.5 h-3.5 text-electric-blue fill-electric-blue" />
                        <span className="text-sm font-mono text-electric-blue">TESTIMONIALS</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">What Clients </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)' }}
                        >
                            Say
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                        Real reviews from real clients on Upwork and Fiverr.
                    </p>
                </motion.div>

                {/* Aggregate rating */}
                <motion.div
                    className="flex items-center justify-center gap-3 mb-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                    </div>
                    <span className="text-white font-display font-bold text-lg">{aggregateRating}</span>
                    <span className="text-neutral-500 text-sm">{aggregateLabel}</span>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="group h-full flex"
                            variants={fadeUp}
                        >
                            <div className="relative border border-white/[0.06] rounded-2xl bg-white/[0.02] p-5 sm:p-7 transition-colors duration-300 hover:border-white/[0.12] overflow-hidden flex flex-col w-full h-full">

                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: `linear-gradient(90deg, transparent, ${t.accent}, transparent)` }}
                                />

                                {/* Quote icon */}
                                <Quote
                                    className="w-8 h-8 mb-4 opacity-20"
                                    style={{ color: t.accent }}
                                />

                                {/* Review text */}
                                <p className="text-neutral-300 leading-relaxed mb-6 text-sm flex-grow">
                                    &ldquo;{t.text}&rdquo;
                                </p>

                                {/* Stars */}
                                <div className="flex gap-0.5 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>

                                {/* Author row */}
                                <div className="flex items-center gap-3">
                                    {/* Avatar */}
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-xs flex-shrink-0"
                                        style={{ backgroundImage: `linear-gradient(135deg, ${t.accent}, ${t.accent}cc)` }}
                                    >
                                        {t.initials}
                                    </div>

                                    {/* Name */}
                                    <div className="flex-1 min-w-0">
                                        <div className="font-semibold text-white text-sm truncate">{t.author}</div>
                                    </div>

                                    {/* Platform badge */}
                                    <a
                                        href="#"
                                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium text-neutral-500 bg-white/[0.04] border border-white/[0.06] hover:text-white hover:border-white/[0.12] transition-colors flex-shrink-0"
                                    >
                                        {t.platform}
                                        <ExternalLink className="w-2.5 h-2.5" />
                                    </a>
                                </div>

                                {/* Hover glow */}
                                <div
                                    className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                                    style={{ backgroundColor: t.accent }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom trust banner */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-4 sm:gap-6 glass px-5 sm:px-8 py-3 sm:py-4 rounded-2xl">
                        {trustBanner.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 sm:gap-6">
                                {i > 0 && <div className="w-px h-8 bg-white/10" />}
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-white">{item.value}</div>
                                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider">{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
