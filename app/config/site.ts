// Content shared by the navigation, contact flow, metadata, and homepage.
// Core service scopes live in app/config/services.ts; project evidence in projects.ts.
export const siteConfig = {
  personal: {
    name: 'Nabeel Sharafat',
    brandName: 'Beelodev',
    email: 'support@beelodev.com',
    phone: '+92 303 846 6058',
    location: 'Pakistan · Remote Worldwide',
    domain: 'beelodev.com',
    tagline:
      'Custom business and workflow automation by Nabeel Sharafat. Connect your tools, reduce repetitive work, and turn requests, research, and data into usable results.',
    responseTime: 'Direct communication with Nabeel',
    availability: { available: true, message: 'Available for new projects' },
    booking: {
      url: 'https://calendly.com/nabeelsharafat/30min',
      label: 'Discuss your workflow',
      shortLabel: 'Book a call',
      duration: '30 min',
      description:
        'Walk through your manual process and explore a practical first step.',
    },
  },
  navLinks: [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/projects' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ],
  footer: {
    serviceSlugs: [
      'email-classification-routing',
      'form-to-report-automation',
      'lead-enrichment-scoring',
      'recurring-website-data-collection',
    ],
    socials: [
      {
        label: 'Upwork',
        href: 'https://www.upwork.com/freelancers/syednabeel24',
      },
      { label: 'Fiverr', href: 'https://www.fiverr.com/s/VYAjE8z' },
      { label: 'GitHub', href: 'https://github.com/nabeel-dev1340' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const revampContent = {
  hero: {
    eyebrow: 'Custom automation · Built around your workflow',
    title: 'Give your team time back.',
    emphasis: 'Automate the busywork.',
    description:
      'I connect your tools and automate the repetitive steps between them, so requests get routed, reports get prepared, and your team spends less time on admin.',
    primaryCta: 'Discuss your workflow',
    secondaryCta: 'See what you can automate',
    nextStep:
      'Start with one task. We’ll define a small pilot before the full build.',
    strip: [
      'Built around the tools you already use',
      'Clear outputs and review checkpoints',
      'Work directly with Nabeel',
    ],
  },
  workflowVisual: {
    label: 'An example of work moving forward',
    source: 'Your tools & incoming work',
    inputs: 'Emails, forms, spreadsheets, and portals',
    steps: 'Connect · Process · Validate',
    destination: 'Ready for your team’s next step',
    outputs: [
      'Requests routed to the right queue',
      'Reports prepared for review',
      'Records kept up to date',
    ],
    note: 'Illustrative workflow · Human review where it matters',
  },
  outcomes: {
    eyebrow: 'Start with the result you need',
    title: 'Where should work move faster?',
    description:
      'From an overloaded inbox to a weekly reporting routine, choose the work you want to make easier. The automation follows your process.',
    groups: [
      {
        title: 'Keep routine operations moving.',
        description:
          'Turn emails and form responses into routed requests, structured records, and reports your team can review.',
        services: [
          'email-classification-routing',
          'form-to-report-automation',
          'portal-report-automation',
        ],
      },
      {
        title: 'Research and prioritize with less tab switching.',
        description:
          'Get company research, lead scores, and content categories with the sources and reasons behind each result.',
        services: ['lead-enrichment-scoring', 'website-content-classification'],
      },
      {
        title: 'Have current data when you need it.',
        description:
          'Receive fresh listings, prices, or public records in a consistent format your team can filter and use.',
        services: [
          'recurring-website-data-collection',
          'real-estate-public-record-extraction',
        ],
      },
      {
        title: 'Put your records back in your control.',
        description:
          'Recover files and structured records from portals or older software, with an organized export and a report of any gaps.',
        services: ['legacy-system-data-exports', 'bulk-document-downloads'],
      },
    ],
  },
  evidence: {
    title: 'Useful results, built into real workflows.',
    description:
      'See how I’ve connected intake, research, classification, and data collection to outputs teams can use.',
    projects: [
      'scoutbrief-mvp-automation',
      'lead-scoring-automation',
      'smart-email-classification-system',
      'foreclosure-data-hub',
    ],
  },
  guides: [
    'n8n-email-classification-workflow',
    'lead-enrichment-scoring-google-sheets',
    'tally-typeform-notion-report-automation',
  ],
  workflowCta: {
    title: 'Start with one workflow.',
    description:
      'Tell me the repetitive task and the result you need. We’ll define a small pilot, check it against real examples, and agree on the full scope.',
    label: 'Discuss your workflow',
  },
  trust: [
    {
      title: 'Your environment, your control.',
      description:
        'Local execution where appropriate, with credentials managed in your environment.',
    },
    {
      title: 'Confidential from the start.',
      description:
        'NDA available before we review sensitive workflows or sample data.',
    },
    {
      title: 'Know what happened.',
      description:
        'Validation, run logs, and exception reports are part of the agreed deliverable.',
    },
  ],
  about: {
    name: 'Nabeel Sharafat',
    intro: 'The person behind the automation.',
    description:
      'I’m Nabeel Sharafat, the Python and workflow automation developer behind Beelodev. I build web scraping pipelines, browser workflows, and n8n, Make, and Zapier integrations that take repetitive work off your team’s hands.',
    approach:
      'My work spans website data extraction, classification pipelines, and workflow integrations with tools such as n8n, Make, and Zapier. I start with your actual process, test a small batch, and build toward an output your team can use.',
  },
  contact: {
    title: 'What would you take off your team’s plate?',
    description:
      'Describe what takes time and what a successful result would look like. You don’t need a technical specification to start.',
    nextStep:
      'Next: I’ll review your workflow and reply with questions or a practical first step.',
    submitLabel: 'Send my workflow',
    volumes: [
      'Under 100 items',
      '100–1,000 items',
      '1,000–10,000 items',
      '10,000+ items',
      'Not sure yet',
    ],
    deadlines: [
      'No fixed deadline',
      'Within 2 weeks',
      'Within a month',
      '1–3 months',
      'A specific date (include below)',
    ],
  },
} as const;
