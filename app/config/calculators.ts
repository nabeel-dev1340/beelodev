export type CalculatorContent = {
  formula: string;
  example: string;
  include: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

// Worked examples use each calculator's default inputs.
export const calculatorContent: Record<'support' | 'invoice' | 'document', CalculatorContent> = {
  support: {
    formula: 'Tickets per month × minutes per ticket ÷ 60 × hourly rate',
    example:
      '500 tickets a month at 8 minutes each comes to about 67 hours. At $25 an hour, that is about $1,667 a month, or $20,000 a year. A hypothetical 50% automated share relates to $10,000 of that annual labor.',
    include: [
      'Time spent reading, researching, replying, and following up',
      'A loaded hourly rate that reflects benefits and overhead',
      'Repeat contacts about the same issue',
      'A sample of real tickets rather than a guess at handling time',
    ],
    faqs: [
      {
        question: 'How do I calculate the cost per support ticket?',
        answer:
          'Multiply the minutes per ticket by your hourly rate and divide by 60. At 8 minutes and $25 an hour, the labor cost is about $3.33 per ticket. This covers handling time only, not software or management.',
      },
      {
        question: 'What automation share should I enter?',
        answer:
          'Use it as a what-if figure, not a forecast. Review a sample of recent tickets and count how many have a clear, documented answer. That gives you a more realistic starting point.',
      },
      {
        question: 'Does the result show what I would save?',
        answer:
          'No. It estimates labor associated with those tickets. Implementation, review time, hosting, and maintenance are excluded, so actual savings would be lower and need testing against your own tickets.',
      },
    ],
    related: [
      { label: 'AI Customer Support Agent', href: '/systems/ai-support-agent' },
      { label: 'How to scope an AI support agent', href: '/blog/how-to-cut-customer-support-costs-with-ai-support-agent' },
    ],
  },
  invoice: {
    formula: 'Invoices per month × minutes per invoice ÷ 60 × hourly rate',
    example:
      '500 invoices a month at 8 minutes each comes to about 67 hours. At $25 an hour, that is about $1,667 a month, or $20,000 a year, and about $3.33 per invoice in handling labor.',
    include: [
      'Opening, reading, and keying each invoice',
      'Chasing approvals and missing purchase order numbers',
      'Correcting errors and investigating duplicates',
      'A loaded hourly rate that reflects benefits and overhead',
    ],
    faqs: [
      {
        question: 'How do you calculate the cost per invoice?',
        answer:
          'Divide the monthly handling labor by the number of invoices, or multiply the minutes per invoice by your hourly rate and divide by 60. At 8 minutes and $25 an hour, that is about $3.33 per invoice.',
      },
      {
        question: 'What is the average cost to process an invoice?',
        answer:
          'Published benchmarks vary widely with company size, invoice complexity, and what each study counts. Your own volume, handling time, and labor rate give a more useful number, which is what this calculator uses.',
      },
      {
        question: 'What does this estimate leave out?',
        answer:
          'It covers handling labor only. Late fees, duplicate payments, software, and audit costs are excluded, as are the implementation and review costs of any automation.',
      },
    ],
    related: [
      { label: 'Invoice Processing Automation', href: '/systems/auto-invoicing' },
      { label: 'How to automate invoice processing', href: '/blog/how-to-automate-invoice-processing-for-small-business' },
    ],
  },
  document: {
    formula: 'Team members × minutes per day ÷ 60 × hourly rate × working days per month',
    example:
      '5 people each spending 30 minutes a day over 20 working days comes to 50 hours a month. At $25 an hour, that is $1,250 a month, or $15,000 a year.',
    include: [
      'Searching folders, inboxes, and shared drives for files',
      'Reading documents to find specific values',
      'Copying fields into spreadsheets or other systems',
      'Time measured over a typical week rather than a single busy day',
    ],
    faqs: [
      {
        question: 'How do I estimate time spent on documents?',
        answer:
          'Ask a few team members to note document searching and copying for one typical week, then average the minutes per day. A short measurement is more reliable than an estimate from memory.',
      },
      {
        question: 'Does this include the cost of errors or rework?',
        answer:
          'No. It estimates the time spent finding and handling documents. Rework, delays, and missed information are excluded, so consider them separately.',
      },
      {
        question: 'Does the result show what automation would save?',
        answer:
          'No. It estimates current labor. Automation also has implementation, review, hosting, and maintenance costs, and a pilot on representative files shows how much of the work it can actually handle.',
      },
    ],
    related: [
      { label: 'AI Document Processing', href: '/systems/docu-brain' },
      { label: 'PDF to Google Sheets guide', href: '/blog/automate-pdf-data-entry-google-sheets' },
    ],
  },
};
