'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Mail, MessageSquare, MapPin, Send, ArrowUpRight, Clock, Calendar, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import posthog from 'posthog-js';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Mail, MessageSquare, MapPin,
};

export default function Contact() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        service: '',
        projectDetails: '',
    });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            // Identify the user by their email on successful submission
            posthog.identify(formData.email, {
                name: formData.name,
                email: formData.email,
            });

            // Capture successful contact form submission
            posthog.capture('contact_form_submitted', {
                service: formData.service,
                budget: formData.budget,
            });

            setShowSuccess(true);
            // Reset form
            setFormData({
                name: '',
                email: '',
                budget: '',
                service: '',
                projectDetails: '',
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred. Please try again.';
            // Capture form submission error
            posthog.capture('contact_form_error', {
                error_message: errorMessage,
                service: formData.service,
                budget: formData.budget,
            });
            posthog.captureException(err);
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const { methods: contactMethods, socialPlatforms, budgetRanges, serviceOptions } = siteConfig.contact;
    const { personal } = siteConfig;

    return (
        <section className="py-16 sm:py-28 px-4 sm:px-6 relative" id="contact" ref={ref}>
            <div className="max-w-6xl mx-auto">

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
                        <Mail className="w-3.5 h-3.5 text-electric-blue" />
                        <span className="text-sm font-mono text-electric-blue">GET IN TOUCH</span>
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Identify Your </span>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #14b8a6)' }}
                        >
                            Bottlenecks
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-lg mx-auto">
                        Tell us where you&apos;re losing time and money. We&apos;ll show you the automation opportunities that will transform your operations.
                    </p>
                </motion.div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">

                    {/* Left — Info */}
                    <motion.div
                        className="lg:col-span-2 space-y-5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        {/* Availability */}
                        <div className="border border-white/[0.06] rounded-2xl bg-white/[0.02] p-6">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
                                </div>
                                <div>
                                    <div className="font-semibold text-white text-sm">{personal.availability.message}</div>
                                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-0.5">
                                        <Clock className="w-3 h-3" />
                                        {personal.responseTime}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Discovery Call Booking */}
                        <a
                            href={personal.booking.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border border-emerald-500/20 rounded-2xl bg-emerald-500/[0.04] p-6 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/[0.08]"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)' }}
                                >
                                    <Calendar className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="font-semibold text-white text-sm">{personal.booking.label}</div>
                                    <div className="text-xs text-emerald-400/70">{personal.booking.duration} · Free</div>
                                </div>
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                                {personal.booking.description}
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:gap-3 transition-all">
                                Schedule Now
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </a>

                        {/* Contact Methods */}
                        {contactMethods.map((item, i) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="group flex items-center gap-4 border border-white/[0.06] rounded-2xl bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/[0.12]"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.15)' }}
                                    >
                                        {Icon && <Icon className="w-5 h-5 text-[#0ea5e9]" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[11px] text-neutral-600 uppercase tracking-wider">{item.label}</div>
                                        <div className="font-medium text-white text-sm truncate">{item.value}</div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-white transition-colors flex-shrink-0" />
                                </a>
                            );
                        })}

                        {/* Platform Links */}
                        <div className="pt-2">
                            <div className="text-[11px] text-neutral-600 uppercase tracking-wider mb-3">Also find us on</div>
                            <div className="flex gap-2">
                                {socialPlatforms.map((p, i) => (
                                    <a
                                        key={i}
                                        href={p.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-neutral-400 bg-white/[0.03] border border-white/[0.06] hover:text-white hover:border-white/[0.12] transition-colors"
                                    >
                                        {p.label}
                                        <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {!showSuccess ? (
                            <form
                                onSubmit={handleSubmit}
                                className="border border-white/[0.06] rounded-2xl bg-white/[0.02] p-5 sm:p-8 space-y-5"
                            >
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                                    >
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        <span>{error}</span>
                                    </motion.div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-700 focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-700 focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Budget *</label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]/20 transition-all appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <option value="" className="bg-neutral-900">Select budget range</option>
                                            {budgetRanges.map((range, i) => (
                                                <option key={i} value={range} className="bg-neutral-900">{range}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Service *</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]/20 transition-all appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <option value="" className="bg-neutral-900">What do you need?</option>
                                            {serviceOptions.map((service, i) => (
                                                <option key={i} value={service} className="bg-neutral-900">{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Project Details *</label>
                                    <textarea
                                        name="projectDetails"
                                        value={formData.projectDetails}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        rows={4}
                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-700 focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Describe your biggest operational bottlenecks — where you're losing time, money, or both..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
                                    whileHover={!isLoading ? { scale: 1.02, boxShadow: '0 8px 30px rgba(14,165,233,0.35)' } : {}}
                                    whileTap={!isLoading ? { scale: 0.97 } : {}}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-[11px] text-neutral-700 text-center">
                                    Your information is safe. No spam, ever.
                                </p>
                            </form>
                        ) : (
                            <motion.div
                                className="border border-white/[0.06] rounded-2xl bg-white/[0.02] p-16 text-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                    style={{ backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.15)' }}
                                >
                                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent!</h3>
                                <p className="text-sm text-neutral-400 max-w-xs mx-auto">
                                    Thanks for reaching out. {personal.name} will get back to you within 4 hours.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
