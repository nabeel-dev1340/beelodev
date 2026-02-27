import Link from 'next/link';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';
import { generateMetadata as generateSEOMetadata } from '../lib/seo';

export const metadata = generateSEOMetadata({
  title: 'Process',
  description:
    'What happens after you book a discovery call with Beelodev: fit check, system recommendation, build, launch, and support.',
  path: '/process',
  keywords: ['automation implementation', 'discovery call', 'automation systems process'],
});

export default function ProcessPage() {
  const bookingUrl = siteConfig.personal.booking.url;

  const steps = [
    {
      title: 'Discovery Call (30 min)',
      details:
        'We clarify your workflow, tools, volume, constraints, and the outcome you want. If it is not a fit, we will tell you fast.',
    },
    {
      title: 'Recommendation + Plan',
      details:
        'You get a clear recommendation (which system, what integrations, timeline, and what we need from you).',
    },
    {
      title: 'Build + Integrate',
      details:
        'We implement the system, connect your tools, and set up validation, exceptions, and handoff rules.',
    },
    {
      title: 'Launch + Handoff',
      details:
        'We test, deploy, and provide a simple handoff so your team can run it confidently.',
    },
    {
      title: 'Support + Tuning',
      details:
        'We monitor early performance and tune the workflow so it stays reliable and useful.',
    },
  ];

  return (
    <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-wider text-electric-blue mb-4">Process</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">How we work</h1>
        <p className="text-neutral-400 text-lg mb-10">
          Book a discovery call, choose the best system, and get it installed with a clear scope and timeline.
        </p>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-electric-blue" />
                <div>
                  <div className="text-white font-semibold">{step.title}</div>
                  <p className="text-neutral-300 leading-relaxed mt-2">{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-shadow"
            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
          >
            <Calendar className="w-4 h-4" />
            {siteConfig.personal.booking.label}
          </a>
          <Link
            href="/systems"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            View systems
          </Link>
        </div>
      </div>
    </main>
  );
}
