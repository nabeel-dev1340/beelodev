'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Bot, Receipt, FileText, Calendar } from 'lucide-react';
import { siteConfig } from '../config/site';
import posthog from 'posthog-js';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Bot, Receipt, FileText,
};

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const isInView = useInView(heroRef, { once: true });
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
    const textY = useTransform(scrollYProgress, [0, 0.6], [0, 100]);

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.2 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    const { hero, personal } = siteConfig;

    return (
        <motion.section
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20"
            id="home"
            style={{ opacity, scale }}
        >
            {/* Radial ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(6,182,212,0.15) 40%, transparent 70%)' }}
            />

            {/* Main Content — Centered */}
            <motion.div
                className="relative z-10 max-w-5xl w-full text-center"
                variants={stagger}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ y: textY }}
            >
                {/* Availability Badge */}
                <motion.div variants={fadeUp} className="mb-10 inline-block">
                    <motion.div
                        className="inline-flex items-center gap-2.5 glass px-5 py-2.5 rounded-full"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                        </span>
                        <span className="text-sm font-medium text-neutral-300">
                            {personal.availability.message}
                        </span>
                    </motion.div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    className="font-display font-extrabold leading-[1.05] tracking-tight mb-8"
                >
                    <span className="block text-white text-[clamp(3rem,8vw,7rem)] pb-1">
                        {hero.headline.line1}
                    </span>
                    <span
                        className="block text-[clamp(3rem,8vw,7rem)] bg-clip-text text-transparent pb-1"
                        style={{
                            backgroundImage: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 40%, #14b8a6 100%)',
                        }}
                    >
                        {hero.headline.line2}
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeUp}
                    className="text-lg md:text-xl text-neutral-300/90 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed"
                >
                    {hero.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-7"
                >
                    <motion.a
                        href={personal.booking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={personal.booking.description}
                        aria-label={personal.booking.label}
                        className="group relative isolate overflow-hidden rounded-2xl px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-sm sm:text-base shadow-lg w-full sm:w-auto text-center ring-1 ring-white/10 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                        whileHover={{ scale: 1.04, boxShadow: "0 22px 60px rgba(14,165,233,0.38)" }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => posthog.capture('booking_cta_clicked', {
                            location: 'hero',
                            label: personal.booking.label,
                        })}
                    >
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)',
                            }}
                        />
                        <div
                            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background:
                                    'radial-gradient(1200px circle at 50% 120%, rgba(255,255,255,0.22) 0%, transparent 55%)',
                            }}
                        />
                        <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 skew-x-[-20deg] bg-white/20 blur-md opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-[260%] transition-all duration-700" />

                        <span className="relative z-10 text-white flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4 text-white/90" />
                            <span className="flex items-center gap-2">
                                <span className="sm:hidden">{personal.booking.shortLabel}</span>
                                <span className="hidden sm:inline">{personal.booking.label}</span>
                                <span className="inline-flex items-center rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium text-white/90">
                                    {personal.booking.duration}
                                </span>
                            </span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </motion.a>

                    <motion.a
                        href={hero.cta.primary.href}
                        aria-label={hero.cta.primary.label}
                        className="glass-strong px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base group w-full sm:w-auto text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                        whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.10)" }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => posthog.capture('hero_primary_cta_clicked', {
                            label: hero.cta.primary.label,
                            href: hero.cta.primary.href,
                        })}
                    >
                        <span className="text-white flex items-center justify-center gap-2">
                            {hero.cta.primary.label}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </motion.a>
                </motion.div>

                <motion.p
                    variants={fadeUp}
                    className="text-xs sm:text-sm text-neutral-400/80 max-w-2xl mx-auto mb-10 sm:mb-12"
                >
                    Free fit check. Clear recommendation. <span className="text-neutral-300/80">{personal.responseTime}</span>.
                </motion.p>

                {/* Capability Pills — Horizontal Row */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14 sm:mb-20"
                >
                    {hero.capabilities.map((cap, i) => {
                        const Icon = iconMap[cap.icon];
                        return (
                            <motion.div
                                key={i}
                                className="glass flex items-center gap-2.5 px-5 py-3 rounded-full"
                                whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.1)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                {Icon && <Icon className="w-4 h-4 text-electric-blue" />}
                                <span className="text-sm font-medium text-neutral-200">{cap.label}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-3 max-w-sm sm:max-w-lg mx-auto"
                >
                    {hero.stats.map((stat, index) => (
                        <div key={index} className="text-center relative">
                            {index > 0 && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10" />
                            )}
                            <motion.div
                                className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                                }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-xs text-neutral-400/80 mt-1 uppercase tracking-wider font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
