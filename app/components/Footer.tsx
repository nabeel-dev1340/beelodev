import Logo from './Logo';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Footer() {
    const { footer, personal } = siteConfig;

    return (
        <footer className="relative px-4 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto">

                {/* Top — CTA Banner */}
                <div className="border border-white/[0.06] rounded-2xl bg-white/[0.02] p-8 sm:p-10 md:p-14 text-center mb-12 sm:mb-16 relative overflow-hidden">
                    <div
                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
                        style={{ backgroundColor: '#0ea5e9' }}
                    />
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">
                        {footer.ctaBanner.headline}
                    </h3>
                    <p className="text-neutral-400 text-base mb-8 max-w-md mx-auto relative z-10">
                        {footer.ctaBanner.subtitle}
                    </p>
                    <a
                        href={siteConfig.personal.booking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white relative z-10 transition-shadow hover:shadow-[0_8px_30px_rgba(14,165,233,0.35)]"
                        style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
                    >
                        <Calendar className="w-4 h-4" />
                        {footer.ctaBanner.cta}
                    </a>

                </div>

                {/* Middle — Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <Logo size={28} />
                            <span className="font-display text-lg font-bold text-white">
                                beelo
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{ backgroundImage: 'linear-gradient(90deg, #0ea5e9, #06b6d4)' }}
                                >
                                    dev
                                </span>
                            </span>
                        </div>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                            {personal.tagline}
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs text-neutral-600 uppercase tracking-wider font-medium mb-4">Services</h4>
                        <ul className="space-y-2.5">
                            {footer.services.map((item, i) => (
                                <li key={i}>
                                    <a href={item.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs text-neutral-600 uppercase tracking-wider font-medium mb-4">Company</h4>
                        <ul className="space-y-2.5">
                            {footer.company.map((item, i) => (
                                <li key={i}>
                                    <a href={item.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-xs text-neutral-600 uppercase tracking-wider font-medium mb-4">Connect</h4>
                        <ul className="space-y-2.5">
                            {footer.socials.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-40" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-neutral-700">
                        © {new Date().getFullYear()} {personal.brandName}. Built with care by {personal.name}.
                    </div>
                    <div className="flex items-center gap-4 text-xs text-neutral-700">
                        <span>{personal.location.split(' · ')[0]}</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-800" />
                        <span>{personal.location.split(' · ')[1]}</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-800" />
                        <span>{personal.domain}</span>
                    </div>
                </div>
            </div>
        </footer >
    );
}
