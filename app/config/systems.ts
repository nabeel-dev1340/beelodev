export const systemSlugs = ['ai-support-agent', 'auto-invoicing', 'docu-brain'] as const;

export type SystemSlug = (typeof systemSlugs)[number];

export type SystemFAQ = {
  question: string;
  answer: string;
};

export type System = {
  slug: SystemSlug;
  name: string;
  shortHeadline: string;
  longDescription: string;
  bestFor: string;
  timeline: string;
  priceLabel: string;
  accent: string;
  icon: 'Bot' | 'Receipt' | 'FileText';
  integrations: string[];
  outcomes: string[];
  includes: string[];
  faqs: SystemFAQ[];
  keywords: string[];
};

export const systems: System[] = [
  {
    slug: 'ai-support-agent',
    name: 'AI Support Agent',
    shortHeadline: 'Resolve customer questions instantly and cut support workload without hiring.',
    longDescription:
      'We install a 24/7 AI support agent that answers repetitive questions, routes edge cases to a human, and gives you visibility into what customers ask most. You keep control of tone, knowledge sources, and handoff rules.',
    bestFor: 'SaaS, agencies, and service teams getting the same questions every day.',
    timeline: '7-14 days',
    priceLabel: '$1099 one-time setup',
    accent: '#0ea5e9',
    icon: 'Bot',
    integrations: ['Website chat', 'WhatsApp', 'Email', 'Docs/FAQ', 'Notion', 'Google Drive'],
    outcomes: [
      'Faster first response times',
      'Fewer repetitive tickets',
      'Better customer experience',
      'Clear analytics on top issues',
    ],
    includes: [
      'Knowledge base setup and sources',
      'Conversation flows and tone matching',
      'Human handoff logic + escalation rules',
      'Analytics and continuous tuning',
      'Launch checklist + handoff documentation',
    ],
    faqs: [
      {
        question: 'What can the agent handle, and what gets handed off?',
        answer:
          'The agent handles repetitive questions (pricing, onboarding, policies, troubleshooting steps) and escalates edge cases based on confidence, keywords, or user intent so a human can step in.',
      },
      {
        question: 'Where does it learn from?',
        answer:
          'We connect your existing docs/FAQs and optionally a curated knowledge base. You approve the sources and we keep answers aligned to your official information.',
      },
      {
        question: 'Do you support WhatsApp or website chat?',
        answer:
          'Yes. We can integrate with website chat and WhatsApp depending on your stack. On the call we confirm your preferred channels and what is feasible for your setup.',
      },
    ],
    keywords: [
      'AI support agent',
      'customer support automation',
      'AI customer service chatbot',
      'reduce support tickets',
    ],
  },
  {
    slug: 'auto-invoicing',
    name: 'Auto-Invoicing',
    shortHeadline: 'Eliminate invoice data entry and reduce accounting errors with a zero-touch workflow.',
    longDescription:
      'We build an invoice processing pipeline that captures invoices from email or portals, extracts line items, validates fields, routes approvals when needed, and pushes clean data into your accounting tools.',
    bestFor: 'Finance teams processing invoices weekly or daily who want less manual work and fewer mistakes.',
    timeline: '10-21 days',
    priceLabel: '$1299 one-time setup',
    accent: '#06b6d4',
    icon: 'Receipt',
    integrations: ['Gmail/Outlook', 'QuickBooks', 'Xero', 'Google Drive', 'Slack', 'Webhooks/API'],
    outcomes: [
      'Less manual entry work',
      'Fewer mistakes and duplicate entries',
      'Cleaner month-end close',
      'Audit-friendly logs and approvals',
    ],
    includes: [
      'Invoice intake (email/portal) + parsing rules',
      'Line item extraction and field validation',
      'Approval routing + exception handling',
      'Accounting system sync (QuickBooks/Xero)',
      'Audit logs and reporting',
    ],
    faqs: [
      {
        question: 'Can you handle different vendor invoice formats?',
        answer:
          'Yes. We build a workflow that handles common formats and improves over time. On the call we review a small set of sample invoices to confirm the approach.',
      },
      {
        question: 'Do you support QuickBooks or Xero?',
        answer:
          'Yes. We can push structured invoices into QuickBooks or Xero and keep an audit trail. We confirm your exact setup on the discovery call.',
      },
      {
        question: 'What happens when the automation is unsure?',
        answer:
          'Uncertain cases go into an exception queue or approval step so a human can review before anything is posted.',
      },
    ],
    keywords: [
      'invoice processing automation',
      'accounts payable automation',
      'QuickBooks invoice automation',
      'Xero invoice automation',
    ],
  },
  {
    slug: 'docu-brain',
    name: 'Docu-Brain',
    shortHeadline: 'Turn PDFs and files into searchable, structured business intelligence your team can use.',
    longDescription:
      'We build a document intelligence system that ingests files, extracts key fields, generates summaries, and stores everything in a searchable database. It is designed to reduce time spent hunting through folders and reading long documents.',
    bestFor: 'Operations teams managing lots of PDFs, contracts, forms, and internal documentation.',
    timeline: '14-28 days',
    priceLabel: '$1999+ starting (scope depends on volume and fields)',
    accent: '#14b8a6',
    icon: 'FileText',
    integrations: ['Google Drive', 'Notion', 'Airtable', 'Slack', 'Custom API', 'Database'],
    outcomes: [
      'Searchable document database',
      'Faster answers and handoffs',
      'Less manual reading and copying',
      'Consistent field extraction + summaries',
    ],
    includes: [
      'Document intake and processing pipeline',
      'Custom field extraction (your schema)',
      'Searchable storage + access patterns',
      'Summaries and insight generation',
      'Security and access considerations',
    ],
    faqs: [
      {
        question: 'What document types can you process?',
        answer:
          'Most PDFs and common office files. We confirm the exact formats and extraction fields on the call using examples from your workflow.',
      },
      {
        question: 'Where does the structured data live?',
        answer:
          'Wherever you need it: Notion, Airtable, a database, or via an API. We design the storage around how your team actually searches and uses the information.',
      },
      {
        question: 'Can this be secure for sensitive documents?',
        answer:
          'Yes. We design the workflow to minimize exposure and follow your access requirements. The discovery call is where we define security constraints and hosting preferences.',
      },
    ],
    keywords: [
      'document intelligence system',
      'document processing automation',
      'PDF data extraction workflow',
      'knowledge base from documents',
    ],
  },
];

export function getSystem(slug: SystemSlug) {
  return systems.find((s) => s.slug === slug);
}
