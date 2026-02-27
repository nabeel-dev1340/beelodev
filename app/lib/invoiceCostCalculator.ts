export type InvoiceCostInputs = {
  invoicesPerMonth: number;
  minutesPerInvoice: number;
  hourlyRate: number;
  includeErrorCorrection: boolean;
};

export type InvoiceCostResults = {
  monthlyCost: number;
  annualCost: number;
};

function sanitizeNonNegativeNumber(value: number) {
  if (!Number.isFinite(value)) return 0;
  if (value <= 0) return 0;
  return value;
}

export function calculateInvoiceProcessingCost(inputs: InvoiceCostInputs): InvoiceCostResults {
  const invoicesPerMonth = sanitizeNonNegativeNumber(inputs.invoicesPerMonth);
  const minutesPerInvoice = sanitizeNonNegativeNumber(inputs.minutesPerInvoice);
  const hourlyRate = sanitizeNonNegativeNumber(inputs.hourlyRate);

  const hoursPerInvoice = minutesPerInvoice / 60;
  const monthlyCost = invoicesPerMonth * hoursPerInvoice * hourlyRate;
  const annualBase = monthlyCost * 12;
  const annualCost = inputs.includeErrorCorrection ? annualBase * 1.05 : annualBase;

  return {
    monthlyCost,
    annualCost,
  };
}
