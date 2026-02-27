export type DocumentCostInputs = {
  teamMembers: number;
  minutesLostPerDay: number;
  hourlyRate: number;
  workDaysPerMonth: number;
  includeRework: boolean;
};

export type DocumentCostResults = {
  monthlyCost: number;
  annualCost: number;
};

function sanitizeNonNegativeNumber(value: number) {
  if (!Number.isFinite(value)) return 0;
  if (value <= 0) return 0;
  return value;
}

export function calculateDocumentHandlingCost(inputs: DocumentCostInputs): DocumentCostResults {
  const teamMembers = sanitizeNonNegativeNumber(inputs.teamMembers);
  const minutesLostPerDay = sanitizeNonNegativeNumber(inputs.minutesLostPerDay);
  const hourlyRate = sanitizeNonNegativeNumber(inputs.hourlyRate);
  const workDaysPerMonth = sanitizeNonNegativeNumber(inputs.workDaysPerMonth);

  const hoursLostPerDay = minutesLostPerDay / 60;
  const monthlyBase = teamMembers * hoursLostPerDay * hourlyRate * workDaysPerMonth;
  const monthlyCost = inputs.includeRework ? monthlyBase * 1.1 : monthlyBase;
  const annualCost = monthlyCost * 12;

  return {
    monthlyCost,
    annualCost,
  };
}
