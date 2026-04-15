'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, Calendar, Bot, Receipt, FileText, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';
import posthog from 'posthog-js';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Bot, Receipt, FileText, MessageSquare,
};

export default function Packages() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const { plans, bottomNote } = siteConfig.packages;

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.15 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <section className="py-16 sm:py-28 px-4 sm:px-6 relative" id="pricing" ref={ref}>
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
                        <span className="text-sm font-mono text-electric-cyan">PRICING</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Simple Plans. </span>
                        <span className="gradient-brand-text">Real Results.</span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                        Four proven automation systems, packaged with fixed scope and clear pricing. Book a call and we will recommend the best fit.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch"
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {plans.map((plan, index) => {
                        const PlanIcon = iconMap[plan.icon];
                        return (
                            <motion.div
                                key={index}
                                className="group relative"
                                variants={fadeUp}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                        <div className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white gradient-brand-duo">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div
                                    className={`h-full flex flex-col rounded-2xl p-6 transition-all duration-300 overflow-hidden relative ${plan.popular
                                        ? 'border-2 bg-white/[0.04]'
                                        : 'border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]'
                                        }`}
                                    style={plan.popular ? { borderColor: `${plan.accent}50` } : {}}
                                >
                                    {/* Top accent line on hover (non-popular) */}
                                    {!plan.popular && (
                                        <div
                                            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{ backgroundImage: `linear-gradient(90deg, transparent, ${plan.accent}, transparent)` }}
                                        />
                                    )}

                                    {/* Icon + Name */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${plan.accent}15`, border: `1px solid ${plan.accent}20` }}
                                        >
                                            {PlanIcon && <PlanIcon className="w-4 h-4" style={{ color: plan.accent }} />}
                                        </div>
                                        <h3 className="font-display text-base font-bold text-white leading-snug">{plan.name}</h3>
                                    </div>

                                    {/* Tagline */}
                                    <p className="text-xs text-neutral-500 leading-relaxed mb-5">{plan.tagline}</p>

                                    {/* Price */}
                                    <div className="mb-5">
                                        <div className="flex items-baseline gap-1">
                                            <span
                                                className="text-4xl font-display font-bold bg-clip-text text-transparent"
                                                style={{ backgroundImage: `linear-gradient(135deg, ${plan.accent}, ${plan.accent}cc)` }}
                                            >
                                                {plan.price}
                                            </span>
                                        </div>
                                        <div className="text-neutral-500 text-xs mt-0.5 uppercase tracking-wider font-mono">{plan.period}</div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-white/6 mb-5" />

                                    {/* Meta: Best for + Timeline */}
                                    <div className="space-y-1.5 mb-4">
                                        {plan.bestFor && (
                                            <p className="text-xs text-neutral-400 leading-relaxed">
                                                <span className="text-neutral-600">Best for:</span> {plan.bestFor}
                                            </p>
                                        )}
                                        {plan.timeline && (
                                            <p className="text-xs text-neutral-500 font-mono uppercase tracking-wide">
                                                Timeline: <span className="text-neutral-400 normal-case">{plan.timeline}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Integration tags */}
                                    {plan.integrations?.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {plan.integrations.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-2 py-1 rounded-md text-[11px] font-medium bg-white/4 border border-white/6 text-neutral-400"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Features */}
                                    <ul className="space-y-2.5 flex-1 mb-6">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: plan.accent }} />
                                                <span className="text-xs text-neutral-300 leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* View details link */}
                                    <Link
                                        href={`/systems/${plan.slug}`}
                                        className="text-xs font-semibold mb-3 inline-block transition-opacity hover:opacity-80"
                                        style={{ color: plan.accent }}
                                        onClick={() => posthog.capture('pricing_plan_details_clicked', {
                                            plan_name: plan.name,
                                            plan_slug: plan.slug,
                                            plan_price: plan.price,
                                            is_popular: plan.popular ?? false,
                                        })}
                                    >
                                        View full details →
                                    </Link>

                                    {/* CTA */}
                                    <motion.a
                                        href={siteConfig.personal.booking.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-shadow ${plan.popular
                                            ? 'text-white'
                                            : 'text-white border border-white/10 hover:border-white/20'
                                            }`}
                                        style={plan.popular ? {
                                            backgroundImage: `linear-gradient(135deg, ${plan.accent}, ${plan.accent}dd)`,
                                        } : {
                                            backgroundColor: 'rgba(255,255,255,0.04)',
                                        }}
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: plan.popular ? `0 8px 30px ${plan.accent}40` : 'none',
                                        }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => posthog.capture('pricing_plan_cta_clicked', {
                                            plan_name: plan.name,
                                            plan_slug: plan.slug,
                                            plan_price: plan.price,
                                            is_popular: plan.popular ?? false,
                                        })}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            Book a free call
                                        </span>
                                    </motion.a>

                                    {/* Hover glow */}
                                    <div
                                        className={`absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${plan.popular ? 'opacity-10' : 'opacity-0 group-hover:opacity-10'
                                            }`}
                                        style={{ backgroundColor: plan.accent }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom note */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-neutral-500 text-sm mb-4">
                        {bottomNote}{' '}
                        <a href="#contact" className="text-electric-blue hover:underline">Let&apos;s chat</a>.
                    </p>
                    <motion.a
                        href={siteConfig.personal.booking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl text-sm font-semibold text-white border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                        whileHover={{ scale: 1.04, backgroundColor: 'rgba(16,185,129,0.08)' }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <Calendar className="w-4 h-4 text-emerald-400" />
                        {siteConfig.personal.booking.label}
                        <span className="text-xs text-emerald-400/70 font-normal">&middot; {siteConfig.personal.booking.duration}</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
