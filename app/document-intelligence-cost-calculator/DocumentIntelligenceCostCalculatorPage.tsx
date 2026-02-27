'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';
import { calculateDocumentHandlingCost } from '../lib/documentIntelligenceCostCalculator';

type NumberFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
  placeholder?: string;
};

function NumberField({ label, value, onChange, min = 0, step = 1, placeholder }: NumberFieldProps) {
  return (
    <div>
      <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">{label}</label>
      <input
        type="number"
        inputMode="decimal"
        min={min}
        step={step}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => {
          const next = e.currentTarget.valueAsNumber;
          if (!Number.isFinite(next)) {
            onChange(0);
            return;
          }
          onChange(Math.max(min, next));
        }}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-700 focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]/20 transition-all"
      />
    </div>
  );
}

export default function DocumentIntelligenceCostCalculatorPage() {
  const bookingUrl = siteConfig.personal.booking.url;

  const [teamMembers, setTeamMembers] = useState(6);
  const [minutesLostPerDay, setMinutesLostPerDay] = useState(30);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [workDaysPerMonth, setWorkDaysPerMonth] = useState(20);
  const [includeRework, setIncludeRework] = useState(true);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }),
    [],
  );

  const results = useMemo(() => {
    return calculateDocumentHandlingCost({
      teamMembers,
      minutesLostPerDay,
      hourlyRate,
      workDaysPerMonth,
      includeRework,
    });
  }, [teamMembers, minutesLostPerDay, hourlyRate, workDaysPerMonth, includeRework]);

  return (
    <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <section className="text-center mb-14 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-wider text-electric-teal mb-4">
            Document Cost Calculator
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5">
            How Much Is Document Chaos Costing Your Business?
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-9">
            Searching, copying, and re-reading files is hidden overhead that compounds as you scale.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-shadow hover:shadow-[0_8px_30px_rgba(14,165,233,0.35)]"
            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
          >
            Calculate My Cost
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        <section id="calculator" className="scroll-mt-24">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-7">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Calculator</h2>
                <p className="text-neutral-400 text-sm mt-2">
                  Estimate time lost to searching, reading, and extracting info from PDFs and files.
                </p>
              </div>
              <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider">No email required</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <NumberField
                label="Team members affected"
                value={teamMembers}
                onChange={setTeamMembers}
                min={0}
                step={1}
                placeholder="6"
              />
              <NumberField
                label="Minutes lost per person / day"
                value={minutesLostPerDay}
                onChange={setMinutesLostPerDay}
                min={0}
                step={1}
                placeholder="30"
              />
              <NumberField
                label="Hourly cost (USD)"
                value={hourlyRate}
                onChange={setHourlyRate}
                min={0}
                step={0.5}
                placeholder="25"
              />
              <NumberField
                label="Work days per month"
                value={workDaysPerMonth}
                onChange={setWorkDaysPerMonth}
                min={0}
                step={1}
                placeholder="20"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              <label className="inline-flex items-center gap-3 text-sm text-neutral-300 select-none">
                <input
                  type="checkbox"
                  checked={includeRework}
                  onChange={(e) => setIncludeRework(e.currentTarget.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-white/10 text-electric-teal focus:ring-[#0ea5e9]/30 focus:ring-2"
                />
                Include 10% rework/duplication cost
              </label>

              <div className="text-xs text-neutral-500">
                Monthly cost: <span className="text-neutral-300 font-semibold">{formatter.format(results.monthlyCost)}</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Results" className="mt-10 sm:mt-14">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-10 text-center">
            <p className="text-neutral-400 text-sm">You are spending approximately:</p>
            <div
              aria-live="polite"
              className="mt-4 font-display font-extrabold tracking-tight text-[clamp(3rem,7vw,5rem)] bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 55%, #14b8a6 100%)' }}
            >
              {formatter.format(results.annualCost)}
            </div>
            <div className="text-sm text-neutral-400 -mt-1">per year in document handling overhead</div>

            <p className="text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed">
              This is the cost of searching and extracting information alone - not including missed deadlines, slow
              handoffs, or errors from outdated docs.
            </p>
            <p className="text-white font-semibold mt-4">As document volume grows, this overhead compounds.</p>

            <a
              href="#solution"
              className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Eliminate This Cost
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section id="solution" className="scroll-mt-24 mt-14 sm:mt-20">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-10">
            <p className="text-xs font-mono uppercase tracking-wider text-electric-teal mb-4">Solution</p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mb-4">Docu-Brain</h2>
            <p className="text-neutral-300 leading-relaxed max-w-3xl">
              Turn PDFs and files into structured, searchable records so your team gets answers in seconds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-white font-semibold mb-4">What it includes</div>
                <ul className="space-y-3">
                  {[
                    'Ingests docs from Drive/Notion/Airtable',
                    'Extracts key fields into your schema',
                    'Summaries + insights your team can use',
                    'Searchable database + retrieval',
                    'Monitoring and error handling',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-electric-teal" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
                <div className="text-xs text-emerald-400/80 uppercase tracking-wider mb-2">Offer</div>
                <div className="font-display text-2xl font-bold text-white">$1999+</div>
                <div className="text-sm text-neutral-300 mt-1">Starting at (scope depends on fields and volume)</div>
                <div className="text-sm text-neutral-400 mt-4">2 weeks free support included.</div>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-shadow hover:shadow-[0_8px_30px_rgba(14,165,233,0.35)]"
                  style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
                >
                  <Calendar className="w-4 h-4" />
                  Book Free 30-Min Strategy Call
                </a>
                <div className="text-[11px] text-neutral-600 text-center mt-3">Free fit check. Clear recommendation. No obligation.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
