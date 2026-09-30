'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { calculateSupportHandlingCost } from '../lib/supportCostCalculator';
import { calculateInvoiceProcessingCost } from '../lib/invoiceCostCalculator';
import { calculateDocumentHandlingCost } from '../lib/documentIntelligenceCostCalculator';

type Kind = 'support' | 'invoice' | 'document';
export default function CostCalculator({ kind }: { kind: Kind }) {
  const [volume, setVolume] = useState(kind === 'document' ? 5 : 500);
  const [minutes, setMinutes] = useState(kind === 'document' ? 30 : 8);
  const [rate, setRate] = useState(25);
  const [days, setDays] = useState(20);
  const [automated, setAutomated] = useState(50);
  const result =
    kind === 'support'
      ? calculateSupportHandlingCost({
          ticketsPerMonth: volume,
          minutesPerTicket: minutes,
          hourlyRate: rate,
          automationRatePercent: automated,
        })
      : kind === 'invoice'
        ? calculateInvoiceProcessingCost({
            invoicesPerMonth: volume,
            minutesPerInvoice: minutes,
            hourlyRate: rate,
            includeErrorCorrection: false,
          })
        : calculateDocumentHandlingCost({
            teamMembers: volume,
            minutesLostPerDay: minutes,
            hourlyRate: rate,
            workDaysPerMonth: days,
            includeRework: false,
          });
  const money = (amount: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  const input = (label: string, value: number, setter: (value: number) => void, max = 1000000) => (
    <label className="field">
      {label}
      <input
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(event) => setter(Math.min(max, Math.max(0, Number(event.target.value) || 0)))}
      />
    </label>
  );
  return (
    <div className="calculator">
      <div className="contact-form">
        {input(
          kind === 'document'
            ? 'Team members'
            : kind === 'support'
              ? 'Tickets per month'
              : 'Invoices per month',
          volume,
          setVolume,
        )}
        {input(
          kind === 'document'
            ? 'Minutes lost per person per day'
            : kind === 'support'
              ? 'Minutes per ticket'
              : 'Minutes per invoice',
          minutes,
          setMinutes,
          1440,
        )}
        {input('Hourly labor cost (USD)', rate, setRate, 10000)}
        {kind === 'document' && input('Workdays per month', days, setDays, 31)}
        {kind === 'support' &&
          input('Hypothetical automated share (%)', automated, setAutomated, 100)}
      </div>
      <div className="calculator-result">
        <span className="small">Estimated monthly labor cost</span>
        <strong>{money(result.monthlyCost)}</strong>
        <p>{money(result.annualCost)} per year, based on your inputs.</p>
        {'annualCostRemovable' in result && typeof result.annualCostRemovable === 'number' && (
          <p>
            At the hypothetical {automated}% automated share, {money(result.annualCostRemovable)} of
            annual labor cost is associated with those tasks.
          </p>
        )}
        <p>
          This is a labor estimate, not a savings promise. Implementation, review time, hosting, and
          maintenance costs are excluded.
        </p>
        <Link href="/contact" className="text-link">
          Discuss the actual workflow <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
