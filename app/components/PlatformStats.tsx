'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Star, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

const badgeIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Award, TrendingUp,
};

export default function PlatformStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [activePreview, setActivePreview] = useState<{ src: string; alt: string } | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const { platforms, aggregate } = siteConfig.platformStats;

    useEffect(() => {
        if (!activePreview) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActivePreview(null);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activePreview]);

    return (
        <section className="py-16 sm:py-28 px-4 sm:px-6 relative z-10" ref={ref}>
            <div className="max-w-5xl mx-auto">

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
                        <CheckCircle className="w-3.5 h-3.5 text-electric-blue" />
                        <span className="text-sm font-mono text-electric-blue">VERIFIED</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Proven </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)' }}
                        >
                            Track Record
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-lg mx-auto">
                        Numbers that speak for themselves across the world&apos;s top freelance platforms.
                    </p>
                </motion.div>

                {/* Platform Cards — side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {platforms.map((p, index) => {
                        const BadgeIcon = badgeIconMap[p.badgeIcon];
                        return (
                            <motion.div
                                key={index}
                                className="group relative rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                            >
                                <a
                                    href={p.url || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    <div className="relative h-full border border-white/6 rounded-2xl bg-white/2 p-5 sm:p-8 transition-colors duration-300 hover:border-white/12">

                                        {/* Top accent line */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{ backgroundImage: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
                                        />

                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                                                    <Image
                                                        src={p.logo}
                                                        alt={p.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                                                </div>
                                            </div>
                                            <div
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white"
                                                style={{ backgroundImage: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)` }}
                                            >
                                                {BadgeIcon && <BadgeIcon className="w-3 h-3" />}
                                                {p.badge}
                                            </div>
                                        </div>

                                        {/* Rating row */}
                                        <div className="flex items-center gap-3 mb-8">
                                            <span
                                                className="text-3xl sm:text-4xl font-display font-bold bg-clip-text text-transparent"
                                                style={{ backgroundImage: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)` }}
                                            >
                                                {p.rating}
                                            </span>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                ))}
                                            </div>
                                            <span className="text-neutral-500 text-sm">({p.reviews} reviews)</span>
                                        </div>

                                        {/* Stats — horizontal */}
                                        <div className="grid grid-cols-3 gap-3">
                                            {[
                                                { label: 'Success Rate', value: p.success },
                                                { label: 'Completed', value: p.reviews },
                                                { label: 'Earned', value: p.earned },
                                            ].map((stat, i) => (
                                                <div
                                                    key={i}
                                                    className="text-center py-3 rounded-xl bg-white/3 border border-white/5"
                                                >
                                                    <div className="text-lg font-display font-bold text-white">{stat.value}</div>
                                                    <div className="text-[10px] text-neutral-600 uppercase tracking-wider mt-0.5">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Profile proof screenshot */}
                                        <div className="mt-6">
                                            <button
                                                type="button"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setActivePreview({
                                                        src: p.profileImage,
                                                        alt: p.profileImageAlt,
                                                    });
                                                    setIsZoomed(false);
                                                }}
                                                className="relative block w-full aspect-video overflow-hidden rounded-xl border border-white/8 bg-black/20"
                                                aria-label={`Open ${p.name} profile screenshot`}
                                            >
                                                <Image
                                                    src={p.profileImage}
                                                    alt={p.profileImageAlt}
                                                    fill
                                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </button>
                                        </div>

                                        {/* Hover glow */}
                                        <div
                                            className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                                            style={{ backgroundColor: p.accent }}
                                        />
                                    </div>
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom aggregate */}
                <motion.div
                    className="mt-10 flex items-center justify-center gap-8 flex-wrap"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    {aggregate.map((s, i) => (
                        <div key={i} className="flex items-center gap-3">
                            {i > 0 && <div className="w-px h-6 bg-white/10 -ml-1" />}
                            <div className="text-center ml-2">
                                <span className="text-lg font-display font-bold text-white">{s.value}</span>
                                <span className="text-xs text-neutral-600 ml-1.5">{s.label}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {activePreview && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 sm:p-8"
                    onClick={() => setActivePreview(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="max-w-6xl mx-auto h-full flex flex-col">
                        <div className="flex items-center justify-end gap-3 mb-4">
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setIsZoomed((current) => !current);
                                }}
                                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                {isZoomed ? 'Zoom out' : 'Zoom in'}
                            </button>
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setActivePreview(null);
                                }}
                                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                Close
                            </button>
                        </div>

                        <div className="relative flex-1 overflow-auto rounded-xl border border-white/15 bg-black/40">
                            <Image
                                src={activePreview.src}
                                alt={activePreview.alt}
                                width={1920}
                                height={1080}
                                className={`mx-auto h-auto w-full object-contain origin-center transition-transform duration-300 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setIsZoomed((current) => !current);
                                }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
