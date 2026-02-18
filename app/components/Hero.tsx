'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, ArrowDown, Bot, Code, Smartphone, Globe, Calendar } from 'lucide-react';
import { siteConfig } from '../config/site';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Bot, Code, Smartphone, Globe,
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
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20"
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
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    {hero.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-20"
                >
                    <motion.a
                        href={hero.cta.primary.href}
                        className="group relative overflow-hidden rounded-2xl px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-sm sm:text-base shadow-lg w-full sm:w-auto text-center"
                        whileHover={{ scale: 1.04, boxShadow: "0 20px 50px rgba(14,165,233,0.35)" }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)',
                            }}
                        />
                        <span className="relative z-10 text-white flex items-center gap-2">
                            {hero.cta.primary.label}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </motion.a>

                    <motion.a
                        href={personal.booking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base group w-full sm:w-auto text-center border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                        whileHover={{ scale: 1.04, backgroundColor: "rgba(16,185,129,0.08)" }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <span className="text-white flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-400" />
                            {personal.booking.label}
                            <span className="text-xs text-emerald-400/70 font-normal">· {personal.booking.duration}</span>
                        </span>
                    </motion.a>
                </motion.div>

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
                            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <span className="text-xs text-neutral-600 uppercase tracking-widest">Scroll</span>
                <ArrowDown className="w-4 h-4 text-neutral-600" />
            </motion.div>
        </motion.section>
    );
}
