'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

export default function Packages() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const plans = [
        {
            name: 'Starter',
            tagline: 'Launch your presence',
            price: '$499',
            period: 'one-time',
            icon: Zap,
            accent: '#0ea5e9',
            features: [
                '5-page WordPress website',
                'Mobile responsive design',
                'Basic SEO setup',
                'Contact form integration',
                '2 rounds of revisions',
                '1 week delivery',
            ],
            cta: 'Get Started',
            popular: false,
        },
        {
            name: 'Growth',
            tagline: 'Scale with AI power',
            price: '$1,499',
            period: 'one-time',
            icon: Sparkles,
            accent: '#06b6d4',
            features: [
                'Custom WordPress or Next.js site',
                'AI chatbot integration',
                'Lead capture automation',
                'CRM integration (HubSpot/Notion)',
                'Advanced SEO & analytics',
                'Priority support for 30 days',
            ],
            cta: 'Start Growing',
            popular: true,
        },
        {
            name: 'Enterprise',
            tagline: 'Full-scale custom build',
            price: '$4,999+',
            period: 'starting at',
            icon: Rocket,
            accent: '#14b8a6',
            features: [
                'Full-stack custom web app',
                'Mobile app (iOS + Android)',
                'Advanced AI automation suite',
                'Custom API development',
                'Dedicated support & maintenance',
                'White-glove onboarding',
            ],
            cta: 'Contact Us',
            popular: false,
        },
    ];

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
        <section className="py-16 sm:py-28 px-4 sm:px-6 relative" id="packages" ref={ref}>
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
                        <span className="text-sm font-mono text-electric-cyan">PRICING</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Simple Plans. </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)' }}
                        >
                            Real Results.
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-lg mx-auto">
                        No hidden fees. No long contracts. Just great work, delivered fast.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            variants={fadeUp}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                    <div
                                        className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white"
                                        style={{ backgroundImage: 'linear-gradient(90deg, #0ea5e9, #06b6d4)' }}
                                    >
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div
                                className={`h-full rounded-2xl p-5 sm:p-7 transition-all duration-300 overflow-hidden relative ${plan.popular
                                    ? 'border-2 bg-white/[0.04]'
                                    : 'border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]'
                                    }`}
                                style={plan.popular ? { borderColor: `${plan.accent}50` } : {}}
                            >
                                {/* Top accent line (non-popular) */}
                                {!plan.popular && (
                                    <div
                                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ backgroundImage: `linear-gradient(90deg, transparent, ${plan.accent}, transparent)` }}
                                    />
                                )}

                                {/* Icon + Name */}
                                <div className="flex items-center gap-3 mb-1">
                                    <div
                                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${plan.accent}15`, border: `1px solid ${plan.accent}20` }}
                                    >
                                        <plan.icon className="w-4 h-4" style={{ color: plan.accent }} />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                                </div>

                                <p className="text-neutral-500 text-sm mb-6 ml-12">{plan.tagline}</p>

                                {/* Price */}
                                <div className="mb-7">
                                    <div className="flex items-baseline gap-1.5">
                                        <span
                                            className="text-4xl sm:text-5xl font-display font-bold bg-clip-text text-transparent"
                                            style={{ backgroundImage: `linear-gradient(135deg, ${plan.accent}, ${plan.accent}cc)` }}
                                        >
                                            {plan.price}
                                        </span>
                                    </div>
                                    <div className="text-neutral-600 text-xs mt-1 uppercase tracking-wider">{plan.period}</div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/[0.06] mb-7" />

                                {/* Features */}
                                <ul className="space-y-3.5 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.accent }} />
                                            <span className="text-sm text-neutral-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <motion.a
                                    href="#contact"
                                    className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-shadow ${plan.popular ? 'text-white' : 'text-white border border-white/[0.1] hover:border-white/[0.2]'
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
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        {plan.cta}
                                        <ArrowRight className="w-4 h-4" />
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
                    ))}
                </motion.div>

                {/* Bottom note */}
                <motion.p
                    className="text-center text-neutral-600 text-sm mt-10"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    All plans include free project consultation. Need something custom?{' '}
                    <a href="#contact" className="text-electric-blue hover:underline">Let&apos;s chat</a>.
                </motion.p>
            </div>
        </section>
    );
}
