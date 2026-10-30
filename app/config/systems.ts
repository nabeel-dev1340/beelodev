export const systemSlugs = ['ai-support-agent', 'auto-invoicing', 'docu-brain', 'ai-website-chatbot'] as const;

export type SystemSlug = (typeof systemSlugs)[number];

export type SystemFAQ = {
  question: string;
  answer: string;
};

export type System = {
  slug: SystemSlug;
  name: string;
  shortHeadline: string;
  seoTitle: string;
  seoDescription: string;
  longDescription: string;
  bestFor: string;
  timeline: string;
  priceLabel: string;
  accent: string;
  icon: 'Bot' | 'Receipt' | 'FileText' | 'MessageSquare';
  integrations: string[];
  outcomes: string[];
  includes: string[];
  faqs: SystemFAQ[];
  keywords: string[];
  heading: string;
  explainer: { question: string; answer: string };
  steps?: { title: string; description: string }[];
  fit?: { good: string[]; notYet: string };
  resources: { label: string; href: string }[];
};

export const systems: System[] = [
  {
    slug: 'ai-support-agent',
    name: 'AI Support Agent',
    seoTitle: 'AI Customer Support Agent Setup',
    seoDescription:
      'Set up a 24/7 AI support agent that answers repeat customer questions, hands edge cases to a human, and shows what customers ask most.',
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
    heading: 'AI Customer Support Agent',
    explainer: {
      question: 'What does an AI support agent do?',
      answer:
        'An AI support agent answers routine customer questions from your approved knowledge sources and hands anything else to a person. It works best when the same questions arrive every day and the answers are already written down.',
    },
    resources: [
      { label: 'How to scope an AI support agent', href: '/blog/how-to-cut-customer-support-costs-with-ai-support-agent' },
      { label: 'Customer Support Cost Calculator', href: '/support-cost-calculator' },
      { label: 'Email Classification & Routing', href: '/services/email-classification-routing' },
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
    seoTitle: 'Invoice Processing Automation with AI Data Extraction',
    seoDescription:
      'Capture invoices from email or portals, extract line items, validate fields, route approvals, and push clean data into QuickBooks or Xero.',
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
      {
        question: 'Will invoices post to our accounting system automatically?',
        answer:
          'Only under the rules you approve. Clean invoices that pass validation can post automatically, or every invoice can wait for sign-off. A sensible start is to keep review on, then relax it once the results are proven on your own invoices.',
      },
      {
        question: 'How is this different from OCR or the capture feature in accounting software?',
        answer:
          'OCR only reads the text. This workflow also applies your validation, duplicate checks, approval routing, and exception handling, and it can connect to more than one system.',
      },
      {
        question: 'How much does invoice automation cost?',
        answer:
          'Pricing is scoped after reviewing your invoices, volume, and integrations. A small pilot on representative invoices comes first. The cost calculator can help you estimate what manual handling costs today.',
      },
    ],
    heading: 'Invoice Processing Automation',
    explainer: {
      question: 'What is invoice processing automation?',
      answer:
        'Invoice processing automation replaces manual invoice entry with a workflow. It collects invoices from email or a portal, extracts the vendor, dates, totals, and line items, checks them against your rules, sends exceptions to a person, and posts approved records to your accounting system.',
    },
    steps: [
      { title: 'Capture', description: 'Collect invoices from a shared inbox, a portal, or a watched folder, and keep the original file with each record.' },
      { title: 'Extract and validate', description: 'Read the fields you need, then check totals, required values, purchase order numbers, and possible duplicates.' },
      { title: 'Review and approve', description: 'Send exceptions and invoices that need sign-off to the right person, with the source document attached.' },
      { title: 'Post and log', description: 'Push approved records to QuickBooks, Xero, or your system, and keep an audit trail of what happened.' },
    ],
    fit: {
      good: [
        'Invoices arrive regularly from many vendors in different formats',
        'Someone re-keys invoice data into your accounting system',
        'Approvals run through email threads and are hard to trace',
        'Duplicate or missed invoices cause problems at month end',
      ],
      notYet:
        'If you only handle a few invoices a month, or they all share one format, the capture feature in your accounting software may be enough. I’ll say so if that is the case.',
    },
    resources: [
      { label: 'How to automate invoice processing', href: '/blog/how-to-automate-invoice-processing-for-small-business' },
      { label: 'Invoice Processing Cost Calculator', href: '/invoice-processing-cost-calculator' },
      { label: 'AI Document Processing', href: '/systems/docu-brain' },
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
    seoTitle: 'AI Document Processing & PDF Data Extraction',
    seoDescription:
      'Turn PDFs, contracts, and forms into structured, searchable data with extracted fields and summaries, so your team stops hunting through folders.',
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
      {
        question: 'How is AI document processing different from OCR?',
        answer:
          'OCR converts an image of text into text. AI document processing goes further by finding the specific fields you need, even when layouts vary, and returning them in a consistent structure. Scans often use both.',
      },
      {
        question: 'How accurate is the extraction?',
        answer:
          'It depends on document quality and how consistent the fields are, so we measure it on a representative sample during the pilot instead of quoting a general figure. Uncertain results go to a person for review.',
      },
      {
        question: 'Can the extracted data go into Google Sheets?',
        answer:
          'Yes. Google Sheets works well when your team reviews a moderate queue. Larger or more complex workloads usually suit a database, with Sheets as a review view or export.',
      },
      {
        question: 'How much does document processing cost?',
        answer:
          'Pricing is scoped after reviewing your documents, volume, and fields. A small pilot on representative files comes first. The cost calculator can help you estimate the current cost of manual handling.',
      },
    ],
    heading: 'AI Document Processing',
    explainer: {
      question: 'What is AI document processing?',
      answer:
        'AI document processing turns PDFs, scans, and office files into structured data. A workflow reads each document, extracts the fields you define, validates them, and stores the result with a link to the source so a person can check it.',
    },
    steps: [
      { title: 'Ingest', description: 'Collect files from a folder, an inbox, or an upload point, and record every file received.' },
      { title: 'Extract', description: 'Pull the fields in your schema, such as parties, dates, amounts, or line items, and summarize long documents where useful.' },
      { title: 'Validate', description: 'Check formats and required values, and send uncertain or incomplete results to a review queue.' },
      { title: 'Store and search', description: 'Write the results to Google Sheets, Notion, Airtable, or a database, linked to the original file.' },
    ],
    fit: {
      good: [
        'Your team copies the same fields from PDFs into a spreadsheet or system',
        'Contracts, forms, or reports are stored in folders nobody can search',
        'Documents follow a few recognizable types, even if the layouts vary',
        'You need a record of where each extracted value came from',
      ],
      notYet:
        'If the documents are unrelated one-offs, or every value must be perfect with no review, a representative pilot should come before any larger build.',
    },
    resources: [
      { label: 'PDF to Google Sheets guide', href: '/blog/automate-pdf-data-entry-google-sheets' },
      { label: 'Document Handling Cost Calculator', href: '/document-intelligence-cost-calculator' },
      { label: 'Bulk Document Downloads', href: '/services/bulk-document-downloads' },
      { label: 'Invoice Processing Automation', href: '/systems/auto-invoicing' },
    ],
    keywords: [
      'document intelligence system',
      'document processing automation',
      'PDF data extraction workflow',
      'knowledge base from documents',
    ],
  },
  {
    slug: 'ai-website-chatbot',
    name: 'AI Website Chatbot',
    seoTitle: 'AI Chatbot for Your Website — Lead Capture & Booking',
    seoDescription:
      'A custom AI chatbot that answers visitor questions, qualifies leads, and books calls through Calendly or your CRM.',
    shortHeadline: 'Engage visitors 24/7, capture leads, and answer questions automatically — without adding headcount.',
    longDescription:
      'We build a custom AI chatbot for your website that greets visitors, answers common questions, qualifies leads, and books calls — all without human involvement. Every conversation is tracked so you can see what visitors ask and where they drop off.',
    bestFor: 'Service businesses, agencies, and SaaS companies that get repetitive website inquiries and want to convert more visitors into leads.',
    timeline: '5-10 days',
    priceLabel: '$899 one-time setup',
    accent: '#8b5cf6',
    icon: 'MessageSquare',
    integrations: ['Website chat widget', 'WhatsApp', 'Email', 'CRM', 'Calendly / Cal.com', 'Slack'],
    outcomes: [
      'Visitors get instant answers instead of bouncing',
      'Leads captured and qualified around the clock',
      'Fewer cold inquiries, more warm conversations',
      'Clear visibility into what visitors actually want',
    ],
    includes: [
      'Custom chatbot design and tone matching',
      'Knowledge base setup from your existing content',
      'Lead capture and qualification flows',
      'Booking / calendar integration',
      'Conversation analytics and reporting',
      'Launch checklist + handoff documentation',
    ],
    faqs: [
      {
        question: 'Can the chatbot book calls or capture leads?',
        answer:
          'Yes. We can wire it to Calendly, Cal.com, or your CRM so qualified visitors can book a call or leave their details directly in the chat.',
      },
      {
        question: 'What does the chatbot learn from?',
        answer:
          'We build its knowledge base from your website copy, FAQs, and any docs you provide. You review and approve the sources before launch.',
      },
      {
        question: 'Can it hand off to a human when needed?',
        answer:
          'Yes. We configure escalation rules so complex or high-intent conversations get flagged or routed to your team via email, Slack, or WhatsApp.',
      },
    ],
    heading: 'AI Chatbot for Your Website',
    explainer: {
      question: 'What can an AI chatbot do on a website?',
      answer:
        'An AI website chatbot answers visitor questions from content you approve, collects details from potential customers, and can offer a booking link or pass the conversation to your team. It is most useful when visitors repeatedly ask the same questions before getting in touch.',
    },
    resources: [
      { label: 'AI Customer Support Agent', href: '/systems/ai-support-agent' },
      { label: 'Lead Enrichment & Scoring', href: '/services/lead-enrichment-scoring' },
    ],
    keywords: [
      'AI chatbot for website',
      'website chatbot for small business',
      'AI lead capture chatbot',
      'custom AI chatbot',
    ],
  },
];

export function getSystem(slug: string) {
  return systems.find((s) => s.slug === slug);
}
