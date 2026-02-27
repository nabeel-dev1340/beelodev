'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';
import { calculateInvoiceProcessingCost } from '../lib/invoiceCostCalculator';

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

export default function InvoiceProcessingCostCalculatorPage() {
  const bookingUrl = siteConfig.personal.booking.url;

  const [invoicesPerMonth, setInvoicesPerMonth] = useState(250);
  const [minutesPerInvoice, setMinutesPerInvoice] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(20);
  const [includeErrorCorrection, setIncludeErrorCorrection] = useState(false);

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
    return calculateInvoiceProcessingCost({
      invoicesPerMonth,
      minutesPerInvoice,
      hourlyRate,
      includeErrorCorrection,
    });
  }, [invoicesPerMonth, minutesPerInvoice, hourlyRate, includeErrorCorrection]);

  const estimatedMonthlyTotal = includeErrorCorrection ? results.monthlyCost * 1.05 : results.monthlyCost;

  return (
    <main className="min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <section className="text-center mb-14 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-wider text-electric-blue mb-4">
            Invoice Cost Calculator
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5">
            How Much Is Manual Invoice Processing Costing Your Business?
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-9">
            Most growing businesses underestimate this by 3-5x.
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
                  Adjust the inputs to see your estimated manual processing cost.
                </p>
              </div>
              <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                No email required
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <NumberField
                label="Invoices per month"
                value={invoicesPerMonth}
                onChange={setInvoicesPerMonth}
                min={0}
                step={1}
                placeholder="250"
              />
              <NumberField
                label="Minutes per invoice"
                value={minutesPerInvoice}
                onChange={setMinutesPerInvoice}
                min={0}
                step={1}
                placeholder="12"
              />
              <NumberField
                label="Hourly cost (USD)"
                value={hourlyRate}
                onChange={setHourlyRate}
                min={0}
                step={0.5}
                placeholder="20"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              <label className="inline-flex items-center gap-3 text-sm text-neutral-300 select-none">
                <input
                  type="checkbox"
                  checked={includeErrorCorrection}
                  onChange={(e) => setIncludeErrorCorrection(e.currentTarget.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-white/10 text-electric-blue focus:ring-[#0ea5e9]/30 focus:ring-2"
                />
                Include 5% error correction cost
              </label>

              <div className="text-xs text-neutral-500">
                Monthly cost: <span className="text-neutral-300 font-semibold">{formatter.format(estimatedMonthlyTotal)}</span>
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
            <div className="text-sm text-neutral-400 -mt-1">per year</div>

            <p className="text-neutral-400 max-w-2xl mx-auto mt-5 leading-relaxed">
              This is the cost of manual invoice data entry alone - not including delays, reporting inefficiencies, or scaling
              constraints.
            </p>
            <p className="text-white font-semibold mt-4">If invoice volume increases, this cost grows with it.</p>

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
            <p className="text-xs font-mono uppercase tracking-wider text-electric-cyan mb-4">Solution</p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mb-4">
              Zero-Touch Invoice Processing
            </h2>
            <p className="text-neutral-300 leading-relaxed max-w-3xl">
              Replace manual data entry with a reliable pipeline that extracts, validates, and routes invoice data into your
              systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-white font-semibold mb-4">What it includes</div>
                <ul className="space-y-3">
                  {[
                    'Automatically extracts invoices from email',
                    'Converts invoice data into structured records',
                    'Sends data directly into your CRM or internal system',
                    'Includes approval workflows',
                    'Includes monitoring and error handling',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-electric-cyan" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
                <div className="text-xs text-emerald-400/80 uppercase tracking-wider mb-2">Offer</div>
                <div className="font-display text-2xl font-bold text-white">$1299</div>
                <div className="text-sm text-neutral-300 mt-1">One-time setup</div>
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

                <div className="text-[11px] text-neutral-600 text-center mt-3">
                  Free fit check. Clear recommendation. No obligation.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
