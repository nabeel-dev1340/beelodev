export type SupportCostInputs = {
  ticketsPerMonth: number;
  minutesPerTicket: number;
  hourlyRate: number;
  automationRatePercent: number;
};

export type SupportCostResults = {
  monthlyCost: number;
  annualCost: number;
  annualCostRemovable: number;
  annualCostRemaining: number;
};

function clampNumber(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function sanitizeNonNegativeNumber(value: number) {
  if (!Number.isFinite(value)) return 0;
  if (value <= 0) return 0;
  return value;
}

export function calculateSupportHandlingCost(inputs: SupportCostInputs): SupportCostResults {
  const ticketsPerMonth = sanitizeNonNegativeNumber(inputs.ticketsPerMonth);
  const minutesPerTicket = sanitizeNonNegativeNumber(inputs.minutesPerTicket);
  const hourlyRate = sanitizeNonNegativeNumber(inputs.hourlyRate);
  const automationRatePercent = clampNumber(inputs.automationRatePercent, 0, 100);

  const hoursPerTicket = minutesPerTicket / 60;
  const monthlyCost = ticketsPerMonth * hoursPerTicket * hourlyRate;
  const annualCost = monthlyCost * 12;
  const annualCostRemovable = annualCost * (automationRatePercent / 100);
  const annualCostRemaining = Math.max(0, annualCost - annualCostRemovable);

  return {
    monthlyCost,
    annualCost,
    annualCostRemovable,
    annualCostRemaining,
  };
}
