export type AutomationService = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  problem: string;
  description: string;
  outcome: string;
  examples: string[];
  deliverables: string[];
  scope: string;
  sample: { source: string; destination: string; files: string[] };
  faqs: { question: string; answer: string }[];
  projectSlug?: string;
  articleSlug: string;
  category?: 'specialist';
  seoTitle?: string;
  seoDescription?: string;
  discovery?: string[];
  relatedServiceSlugs?: string[];
};

export const automationServices: AutomationService[] = [
  {
    slug: 'bulk-document-downloads',
    number: '01',
    title: 'Bulk Document Downloads',
    seoTitle: 'Bulk Document Download Automation for Client Portals',
    seoDescription:
      'Retrieve thousands of portal PDFs and attachments with custom download automation. Organized folders, saved progress, and a completion report from Beelodev.',
    discovery: [
      'The portal and a representative record with attachments',
      'Approximate file count, file types, and folder naming rules',
      'Your deadline and how the archive will be checked',
    ],
    relatedServiceSlugs: [
      'legacy-system-data-exports',
      'portal-report-automation',
    ],
    shortTitle: 'Download the whole archive.',
    problem: '“We need thousands of files out of this portal.”',
    description:
      'Custom download automation for client portals, document archives, and record systems. Retrieve the files you have access to, keep them organized, and know what was missed.',
    outcome: 'An organized file archive, without opening every record.',
    examples: [
      'Invoices and statements from a vendor portal',
      'PDFs and attachments from a client archive',
      'Documents spread across hundreds of record pages',
    ],
    deliverables: [
      'A downloader you can run locally where appropriate',
      'Files organized by agreed names and folders',
      'Saved progress, retries, and duplicate checks',
      'A completion report listing downloaded and missing files',
      'Setup instructions and a handover walkthrough',
    ],
    scope:
      'This service retrieves files. Extracting their contents or mapping records for a new system is scoped separately.',
    sample: {
      source: 'Client document portal',
      destination: 'Organized local archive',
      files: [
        'clients/AC-104/invoice-2026-01.pdf',
        'clients/AC-104/statement-2026-01.pdf',
        'completion-report.csv',
      ],
    },
    faqs: [
      {
        question: 'Can the downloader resume after an interruption?',
        answer:
          'Saved progress and a download manifest can allow a job to resume without repeating completed files. The pilot verifies this against your portal and file types.',
      },
      {
        question: 'Can it run on my computer?',
        answer:
          'Local execution is an option when your system, access method, and volume support it. Your credentials can stay in your own environment.',
      },
      {
        question: 'What if some files are unavailable?',
        answer:
          'Missing files, permission errors, and exhausted retries are listed in the completion report so you can reconcile the archive.',
      },
    ],
    articleSlug: 'bulk-download-documents-from-client-portals',
  },
  {
    slug: 'legacy-system-data-exports',
    number: '02',
    title: 'Legacy System Data Exports',
    seoTitle: 'Legacy Data Extraction & Migration Preparation Services',
    seoDescription:
      'Extract records and attachments from legacy software. Get mapped CSV or JSON exports, stable record IDs, and validation reports before switching systems.',
    discovery: [
      'The source system, accessible record types, and attachment volumes',
      'The destination import specification, if one is available',
      'Source counts, required fields, and the software cutoff date',
    ],
    relatedServiceSlugs: [
      'bulk-document-downloads',
      'portal-report-automation',
    ],
    shortTitle: 'Take your records with you.',
    problem: '“We’re switching software and need our records.”',
    description:
      'Extract records and attachments from older software, then clean and map the data into agreed export files. Start your transition with data you can inspect and reconcile.',
    outcome: 'Structured records and attachments, ready for the next step.',
    examples: [
      'Customer records from a system with limited exports',
      'Case histories and their linked attachments',
      'Operational data needed before a software contract ends',
    ],
    deliverables: [
      'An inventory of accessible records and attachments',
      'CSV, JSON, or another agreed export format',
      'Field mapping and data cleaning rules',
      'Stable IDs linking records to their attachments',
      'Record counts, validation checks, and exception reports',
    ],
    scope:
      'The core offer is extraction and migration preparation. A complete migration requires separate scoping of the destination, imports, field mapping, and validation.',
    sample: {
      source: 'Legacy record system',
      destination: 'Mapped export package',
      files: [
        'exports/customers.csv',
        'exports/attachment-manifest.csv',
        'validation/record-counts.csv',
      ],
    },
    faqs: [
      {
        question: 'Does this include importing into the new software?',
        answer:
          'The initial scope covers extraction and migration preparation. Destination imports and end-to-end migration validation are quoted only after the new system and requirements have been reviewed.',
      },
      {
        question: 'What if the software has no export button?',
        answer:
          'We first check available APIs and built-in exports, then assess an authorized browser workflow if needed. A small pilot establishes what can be retrieved reliably.',
      },
      {
        question: 'How do we know the export is complete?',
        answer:
          'We agree on source counts and validation rules, reconcile exported records and attachments, and report any gaps rather than silently treating them as complete.',
      },
    ],
    articleSlug: 'legacy-system-data-export-checklist',
  },
  {
    slug: 'recurring-website-data-collection',
    number: '03',
    title: 'Recurring Website Data Collection',
    seoTitle: 'Python Web Scraping & Recurring Data Collection Services',
    seoDescription:
      'Custom Python web scraping for listings, prices, and public records. Scheduled collection, deduplication, and delivery to your spreadsheet or database.',
    discovery: [
      'Approved source URLs and sample pages',
      'Required fields, duplicate rules, and collection frequency',
      'The delivery destination and acceptable freshness window',
    ],
    relatedServiceSlugs: [
      'real-estate-public-record-extraction',
      'website-content-classification',
      'lead-enrichment-scoring',
    ],
    shortTitle: 'Keep your data fresh.',
    problem: '“We need fresh listings, prices, or public records every day.”',
    description:
      'Scheduled Python data collection for approved website sources. Turn changing pages into consistent records delivered to a spreadsheet, database, or your own application.',
    outcome: 'A dataset that stays useful as the source changes.',
    examples: [
      'Property listings and public record monitoring',
      'Product prices and availability tracking',
      'Business directories and market research datasets',
    ],
    deliverables: [
      'A collector built for the agreed sources and fields',
      'Scheduling, deduplication, and normalization',
      'Delivery to CSV, a spreadsheet, or a database',
      'Run logs, freshness checks, and failure alerts',
      'Documentation and an agreed maintenance plan',
    ],
    scope:
      'This service keeps datasets fresh. Source coverage, collection frequency, permitted access, and ongoing maintenance are agreed before implementation.',
    sample: {
      source: 'Approved website sources',
      destination: 'Fresh structured dataset',
      files: [
        'data/listings.csv',
        'data/changes.csv',
        'runs/collection-log.csv',
      ],
    },
    faqs: [
      {
        question: 'How often can the data be collected?',
        answer:
          'The schedule depends on your need, source limits, and the size of each run. Daily, weekly, and other schedules can be assessed during the pilot.',
      },
      {
        question: 'What happens when a website changes?',
        answer:
          'Validation and alerts help detect broken extraction or missing fields. Maintenance responsibilities and response expectations are agreed as part of the delivery plan.',
      },
      {
        question: 'Can the data go straight to my database?',
        answer:
          'Yes, when a suitable connection is available. The output schema and destination are agreed up front, with CSV or spreadsheet delivery also available.',
      },
    ],
    projectSlug: 'foreclosure-data-hub',
    articleSlug: 'planning-recurring-website-data-collection',
  },
  {
    slug: 'portal-report-automation',
    number: '04',
    title: 'Portal & Report Automation',
    seoTitle: 'Browser Automation for Portal Tasks & Report Downloads',
    seoDescription:
      'Automate recurring portal reports and browser data entry. Custom workflows with validation, run logs, failure alerts, and a practical handover.',
    discovery: [
      'A walkthrough of the login and recurring browser steps',
      'Sample inputs, expected reports, and validation rules',
      'The schedule, approval checkpoints, and notification recipient',
    ],
    relatedServiceSlugs: [
      'bulk-document-downloads',
      'form-to-report-automation',
      'email-classification-routing',
    ],
    shortTitle: 'Let the routine run itself.',
    problem: '“Someone logs in every day to download reports or enter data.”',
    description:
      'Custom browser workflows for repetitive portal tasks. Automate the agreed steps, validate the results, and bring exceptions back to a person when judgment is needed.',
    outcome:
      'A repeatable workflow with a visible result and clear exceptions.',
    examples: [
      'Downloading and distributing daily reports',
      'Moving approved data between business portals',
      'Submitting recurring forms with validation',
    ],
    deliverables: [
      'An automated workflow for the agreed portal steps',
      'Input and output validation rules',
      'Run history and failure notifications',
      'Human checkpoints for approvals or sensitive actions',
      'Operating instructions and a handover session',
    ],
    scope:
      'This service handles operational tasks. Authentication, multi-factor prompts, approvals, and actions that change records are reviewed during scoping.',
    sample: {
      source: 'Business reporting portal',
      destination: 'Validated daily report',
      files: [
        'reports/daily-summary.csv',
        'validation/check-results.csv',
        'runs/workflow-log.csv',
      ],
    },
    faqs: [
      {
        question: 'Can you automate a portal that requires login?',
        answer:
          'We review the authorized access method and authentication requirements first. Some workflows need a human login or multi-factor checkpoint, which is included in the design.',
      },
      {
        question: 'How will I know a run failed?',
        answer:
          'Run logs and agreed notifications identify failed steps and validation issues. The handover explains what your team should do next.',
      },
      {
        question: 'Can it enter data as well as download reports?',
        answer:
          'Yes, where the system supports a reliable workflow. Write actions require agreed validation, permissions, and any necessary approval checkpoints.',
      },
    ],
    articleSlug: 'automate-portal-report-downloads',
  },
  {
    slug: 'real-estate-public-record-extraction',
    number: '05',
    category: 'specialist',
    title: 'Real Estate & Public Record Extraction',
    shortTitle: 'Turn scattered records into a usable property dataset.',
    problem:
      '“Our team checks property and foreclosure records one site at a time.”',
    description:
      'Python data extraction for real estate research teams and property data products. Collect agreed foreclosure, REO, and public record fields, preserve source references, and deliver normalized records.',
    seoTitle: 'Real Estate & Foreclosure Data Extraction Services',
    seoDescription:
      'Custom Python extraction for foreclosure, REO, and property public records. Normalized fields, source links, duplicate checks, and CSV or database delivery.',
    outcome: 'Property records your team can filter, reconcile, and use.',
    examples: [
      'Foreclosure and REO records from agreed public sources',
      'Property datasets assembled across differing county formats',
      'A recurring data feed for a real estate research dashboard',
    ],
    deliverables: [
      'A source coverage inventory with the agreed fields',
      'A Python extraction and normalization pipeline',
      'Record identifiers, source URLs, and collection timestamps',
      'Duplicate rules, exception reports, and reconciliation checks',
      'CSV or database delivery with documented field definitions',
    ],
    scope:
      'Coverage is scoped source by source. The output is a research dataset; title verification, legal status, owner contact accuracy, and investment advice are outside the extraction scope.',
    sample: {
      source: 'Agreed property record sources',
      destination: 'Normalized property research data',
      files: [
        'data/property-records.csv',
        'reference/source-coverage.csv',
        'validation/duplicate-review.csv',
      ],
    },
    discovery: [
      'The counties or source sites you need covered',
      'Required property fields and sample records your team considers complete',
      'The update schedule and how the dataset will be used',
    ],
    faqs: [
      {
        question: 'Can you collect records from every county?',
        answer:
          'Coverage is evaluated for the particular counties and sources you need. Access methods, available fields, and source formats differ, so a pilot establishes feasible coverage before a broader quote.',
      },
      {
        question: 'Can the data feed our existing dashboard?',
        answer:
          'Yes, when the destination supports a suitable connection. We agree on the schema, stable identifiers, and update behavior, then test a sample import or database delivery.',
      },
      {
        question: 'How are conflicting property records handled?',
        answer:
          'The workflow retains source references and applies agreed matching rules. Ambiguous addresses or conflicting values are flagged for review instead of silently merging them.',
      },
    ],
    projectSlug: 'foreclosure-data-hub',
    articleSlug: 'real-estate-public-record-data-pipeline',
    relatedServiceSlugs: [
      'recurring-website-data-collection',
      'lead-enrichment-scoring',
    ],
  },
  {
    slug: 'lead-enrichment-scoring',
    number: '06',
    category: 'specialist',
    title: 'Lead Enrichment & Scoring',
    shortTitle: 'Give your lead list a clear next step.',
    problem:
      '“We research every company in this spreadsheet before deciding who fits.”',
    description:
      'Automate company research and lead qualification from an existing list. Enrich agreed business fields, retain supporting sources, and apply your scoring rubric in Google Sheets or an agreed export.',
    seoTitle: 'Lead Enrichment & Scoring Automation for Google Sheets',
    seoDescription:
      'Enrich company leads and apply your qualification rubric with a custom Make.com or n8n workflow. Source-backed research, explainable scores, and Sheets delivery.',
    outcome: 'A researched company list with scores your team can inspect.',
    examples: [
      'Qualifying real estate companies against a business-fit rubric',
      'Adding company details to incomplete Google Sheets rows',
      'Separating promising accounts from leads needing manual research',
    ],
    deliverables: [
      'An agreed enrichment schema and scoring rubric',
      'A Make.com, n8n, or Python workflow suited to your sources',
      'Supporting URLs and explicit unknown values',
      'Rule-based scores with reasons and review flags',
      'Structured sheet updates, duplicate checks, and a handover',
    ],
    scope:
      'This service enriches and qualifies an existing company list. Purchased lead data, private contact discovery, CRM rollout, and outbound messaging are separate scopes. A score follows your rubric and is not a prediction of a sale.',
    sample: {
      source: 'Existing company lead spreadsheet',
      destination: 'Researched and scored company list',
      files: [
        'leads/enriched-companies.csv',
        'reference/scoring-rubric.csv',
        'review/unverified-fields.csv',
      ],
    },
    discovery: [
      'A sample of your current company list and the fields you need',
      'Examples of good-fit and poor-fit companies with the reasons',
      'Your research sources, sheet destination, and refresh needs',
    ],
    faqs: [
      {
        question: 'Can you enrich an existing Google Sheet?',
        answer:
          'Yes. We agree on input columns, row identifiers, output fields, and overwrite rules. A pilot checks a representative set of rows before updating the full list.',
      },
      {
        question: 'How do we avoid made-up company details?',
        answer:
          'The workflow captures sources for researched fields and leaves unverified information unknown. Important fields can require a review checkpoint, and scores can exclude unsupported values.',
      },
      {
        question: 'Can we change the scoring rules later?',
        answer:
          'The rubric is documented and designed to be inspectable. The handover explains which thresholds or rules your team can change and which changes require a workflow update.',
      },
    ],
    projectSlug: 'lead-scoring-automation',
    articleSlug: 'lead-enrichment-scoring-google-sheets',
    relatedServiceSlugs: [
      'website-content-classification',
      'recurring-website-data-collection',
    ],
  },
  {
    slug: 'email-classification-routing',
    number: '07',
    category: 'specialist',
    title: 'Email Classification & Routing',
    shortTitle: 'Turn an inbox into a usable work queue.',
    problem:
      '“Someone reads each incoming email just to categorize and log it.”',
    description:
      'Custom n8n email workflows for Gmail-based operations. Classify incoming messages against agreed categories, extract the fields your team needs, and store structured results in MySQL or a spreadsheet.',
    seoTitle: 'n8n Email Classification & Gmail Routing Automation',
    seoDescription:
      'Classify Gmail messages and log structured results with a custom n8n workflow. Agreed categories, duplicate handling, review queues, and MySQL or Sheets delivery.',
    outcome: 'Categorized messages and structured records ready for review.',
    examples: [
      'Separating SaaS support queries from general inquiries',
      'Logging incoming requests with category and source message ID',
      'Routing ambiguous or incomplete messages to a review queue',
    ],
    deliverables: [
      'A category taxonomy tested against representative messages',
      'An n8n workflow with an agreed inbox connection',
      'Structured message fields and destination mapping',
      'Duplicate handling and an unclassified-message review path',
      'Failure notifications, operating notes, and a handover',
    ],
    scope:
      'The initial scope covers classification, routing, and structured logging. Automatic replies, deleting messages, and changing customer records need separate rules and approval checkpoints.',
    sample: {
      source: 'Authorized Gmail inbox',
      destination: 'Categorized message records',
      files: [
        'messages/classified-requests.csv',
        'review/unclassified-messages.csv',
        'runs/processing-log.csv',
      ],
    },
    discovery: [
      'An anonymized sample covering ordinary and ambiguous emails',
      'Your category definitions and the destination for each category',
      'The fields to retain, duplicate rules, and who reviews exceptions',
    ],
    faqs: [
      {
        question: 'Do we need an AI model for every email?',
        answer:
          'No. Sender, subject, or other deterministic rules may handle predictable messages. We assess where classification needs a model and where simpler rules are sufficient.',
      },
      {
        question: 'What happens when a message fits two categories?',
        answer:
          'We define precedence or multiple-label rules during scoping. Messages that do not meet the agreed rules can be sent to a review queue with their source reference.',
      },
      {
        question: 'Does this send automatic customer replies?',
        answer:
          'Replies are outside the initial classification scope. If needed, a separate phase defines approved response content, escalation rules, and human review.',
      },
    ],
    projectSlug: 'smart-email-classification-system',
    articleSlug: 'n8n-email-classification-workflow',
    relatedServiceSlugs: [
      'form-to-report-automation',
      'website-content-classification',
    ],
  },
  {
    slug: 'website-content-classification',
    number: '08',
    category: 'specialist',
    title: 'Website & Content Classification',
    shortTitle: 'Sort the research pile with a clear rubric.',
    problem:
      '“We open every website or article to decide whether it belongs on our list.”',
    description:
      'Python and n8n pipelines that extract website signals or article content, then classify or score each item against your instructions. Receive structured results with evidence and a review path for uncertain cases.',
    seoTitle: 'Website Classification & Article Scoring Automation',
    seoDescription:
      'Classify domain lists or score articles with Python and n8n. Extract page signals, apply your rubric, and export categories, reasons, and review flags to CSV or Sheets.',
    outcome: 'A categorized research list with reasons behind each result.',
    examples: [
      'Classifying a domain list by business category',
      'Scoring articles for relevance to a research brief',
      'Turning website titles, descriptions, and content signals into CSV fields',
    ],
    deliverables: [
      'An extraction schema and documented classification rubric',
      'A Python batch script or n8n workflow for the agreed inputs',
      'Page signals, source references, and structured categories',
      'Unreachable-page and uncertain-result exception reports',
      'CSV or Google Sheets output with setup and rerun instructions',
    ],
    scope:
      'Classification reflects the content retrieved and the agreed rubric. Pages with little accessible text or ambiguous signals need review. Website redesign, search ranking analysis, and unrestricted crawling are separate scopes.',
    sample: {
      source: 'Domain or article URL list',
      destination: 'Classified and scored research records',
      files: [
        'research/classified-domains.csv',
        'reference/page-signals.csv',
        'review/unreachable-or-uncertain.csv',
      ],
    },
    discovery: [
      'Sample domain or article URLs, including difficult cases',
      'Category definitions or scoring rules with positive and negative examples',
      'The batch size, output destination, and review criteria',
    ],
    faqs: [
      {
        question: 'Can a website classification script run locally?',
        answer:
          'Yes, where the sources and access method support it. My Website Classification Pipeline project used a local Windows Python script with CSV output and a client-defined rubric.',
      },
      {
        question: 'How do we check classification quality?',
        answer:
          'We label a representative evaluation set together and compare the workflow results with those labels. Wrong or ambiguous cases guide changes to the rubric and review rules before the full run.',
      },
      {
        question: 'Can the same workflow score articles?',
        answer:
          'Article scoring can use a similar rubric-based approach with a different extraction step. The content sources, scoring criteria, and output schema are scoped for that use case.',
      },
    ],
    projectSlug: 'ai-website-classification-pipeline',
    articleSlug: 'classify-websites-and-score-articles',
    relatedServiceSlugs: [
      'lead-enrichment-scoring',
      'recurring-website-data-collection',
    ],
  },
  {
    slug: 'form-to-report-automation',
    number: '09',
    category: 'specialist',
    title: 'Form-to-Report Automation',
    shortTitle: 'Make a submitted form ready for the team.',
    problem:
      '“We rewrite form responses into reports and paste them into Notion.”',
    description:
      'Connect Tally or Typeform submissions to structured summaries and Notion or Google Sheets records. Use Make, Zapier, or n8n to validate inputs, follow your report format, and make each submission easy to review.',
    seoTitle: 'Tally & Typeform to Notion Report Automation',
    seoDescription:
      'Turn Tally or Typeform submissions into structured reports in Notion or Google Sheets. Custom Make or Zapier workflows with validation and review checkpoints.',
    outcome:
      'Consistent reports from submissions, with the source still attached.',
    examples: [
      'Scouting notes turned into structured team summaries',
      'Client intake responses prepared for a review meeting',
      'Recurring team updates organized into an agreed report format',
    ],
    deliverables: [
      'A form field map and agreed report template',
      'A workflow connecting intake, processing, and the destination',
      'Required-field checks and duplicate-submission rules',
      'Source-linked summaries and a review status',
      'An operating walkthrough and documented failure recovery',
    ],
    scope:
      'The offer is a defined intake-to-report workflow. A full client portal, user accounts, sensitive personnel decisions, and automatic external publication require separate scoping. Generated summaries remain reviewable.',
    sample: {
      source: 'Tally or Typeform submissions',
      destination: 'Structured reports for team review',
      files: [
        'reports/scouting-summary.md',
        'reference/submission-field-map.csv',
        'review/incomplete-submissions.csv',
      ],
    },
    discovery: [
      'Your current form and an anonymized sample submission',
      'The report template and destination database or sheet',
      'The reviewer, required fields, and what should happen on a failed run',
    ],
    faqs: [
      {
        question: 'Can you use our existing form and Notion database?',
        answer:
          'Yes, when their available connections support the required workflow. We map form fields to database properties and test the page format with sample submissions.',
      },
      {
        question: 'Does every report need AI summarization?',
        answer:
          'No. A fixed template may be sufficient for structured responses. Summarization is useful where free-text notes need organizing, and it is tested against the original submission.',
      },
      {
        question: 'What happens to an incomplete submission?',
        answer:
          'Required-field checks can flag it before generating the report. We agree on the review status, notification, and recovery step so an incomplete report is not treated as ready.',
      },
    ],
    projectSlug: 'scoutbrief-mvp-automation',
    articleSlug: 'tally-typeform-notion-report-automation',
    relatedServiceSlugs: [
      'email-classification-routing',
      'portal-report-automation',
    ],
  },
];

export const coreAutomationServices = automationServices.filter(
  (service) => !service.category,
);
export const specialistAutomationServices = automationServices.filter(
  (service) => service.category === 'specialist',
);

export const deliverySteps = [
  {
    title: 'Define a useful result.',
    description:
      'Show me the repetitive task, the tools involved, and what your team needs to receive. Agree on what success looks like.',
  },
  {
    title: 'Verify it on real examples.',
    description:
      'Test a small, representative batch. Check access, output quality, and the awkward edge cases.',
  },
  {
    title: 'Put the workflow to work.',
    description:
      'Implement the agreed scope with validation, run logs, retries, and clear exceptions.',
  },
  {
    title: 'Keep the result in your control.',
    description:
      'Receive the code, setup instructions, and a walkthrough. Agree on any ongoing maintenance.',
  },
];

export const commonFAQs = [
  {
    question: 'How much does a custom automation cost?',
    answer:
      'Pricing follows a review of the system, volume, and deliverables. A small pilot helps establish feasibility before a full implementation is quoted.',
  },
  {
    question: 'Do I need to share my password?',
    answer:
      'Access is planned with you. Local execution and client-controlled credentials are options where appropriate. Please do not send passwords through the inquiry form.',
  },
  {
    question: 'Can we work under an NDA?',
    answer:
      'Yes. An NDA can be arranged before reviewing confidential workflows or sample data.',
  },
  {
    question: 'Do you work with clients internationally?',
    answer:
      'Yes. Nabeel works remotely from Pakistan with clients worldwide, using calls, written updates, and recorded walkthroughs.',
  },
];
