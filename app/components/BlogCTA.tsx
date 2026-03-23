// Blog system — added for SEO

import { Calendar } from 'lucide-react';

const BOOKING_URL = 'https://calendly.com/nabeelsharafat/30min';

export default function BlogCTA() {
  return (
    <div
      className="rounded-2xl border border-electric-blue/15 bg-electric-blue/6 p-6 sm:p-8"
    >
      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
        Ready to implement this in your business?
      </h3>
      <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
        Book a free 30-minute discovery call. We&apos;ll map out exactly which automation system fits your
        situation.
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-shadow hover-glow-blue gradient-brand-duo"
      >
        <Calendar className="w-4 h-4" />
        Book Free Call →
      </a>
    </div>
  );
}
