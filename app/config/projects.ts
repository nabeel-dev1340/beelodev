import type { SystemSlug } from './systems';

export type Project = {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    contribution?: string;
    outcome?: string;
    services?: string[];
    metrics: string[];
    accent: string;
    featured?: boolean;
    icon?:
        | 'Bot'
        | 'BarChart3'
        | 'ShoppingCart'
        | 'Smartphone'
        | 'Zap'
        | 'Activity';
    images: string[];
    liveUrl?: string;
    systems?: SystemSlug[];
};

// Add your real projects here.
// Image paths should point to files inside /public, e.g. /projects/my-project/cover.png
export const projects: Project[] = [
    {
        slug: 'foreclosure-data-hub',
        title: 'Foreclosure Data Hub',
        outcome:
            'Fresh public records delivered as structured property data that users can filter, export, and monitor in one platform.',
        contribution:
            'Python collection pipeline, record normalization, and delivery into the platform.',
        services: [
            'real-estate-public-record-extraction',
            'recurring-website-data-collection',
        ],
        category: 'Data Automation',
        shortDescription:
            'Built a foreclosure intelligence platform powered by a Python scraping pipeline that ingests nationwide public records daily and turns them into investor-ready deal data.',
        fullDescription:
            'Foreclosure Data Hub is a real-estate intelligence product built around a Python scraping pipeline that continuously collects and normalizes foreclosure and REO records across U.S. counties. The platform delivers fresh daily data in a modern dashboard with filtering, saved searches, CSV export, and automated email alerts so investors can act quickly. It also includes AI-powered property analysis, owner lookup workflows, and structured records that help users evaluate opportunities faster without manual courthouse research.',
        metrics: [
            'Python scraping pipeline',
            'Record normalization',
            'Scheduled collection',
            'CSV export',
        ],
        accent: '#14b8a6',
        featured: true,
        icon: 'BarChart3',
        images: [
            '/projects/foreclosuredatahub/foreclosuredatahub_1.png',
            '/projects/foreclosuredatahub/foreclosuredatahub_2.png',
        ],
        liveUrl: 'https://foreclosuredatahub.com',
        systems: ['docu-brain'],
    },
    {
        slug: 'ai-website-classification-pipeline',
        title: 'Website Classification Pipeline',
        contribution:
            'Local Windows script, website signal extraction, API classification, and CSV output.',
        services: [
            'website-content-classification',
            'recurring-website-data-collection',
        ],
        category: 'Python Data Extraction',
        shortDescription:
            'Built a lightweight Python pipeline that scrapes 5,000 domain homepages, extracts key page signals, and classifies each website with ChatGPT into CSV-ready output.',
        fullDescription:
            'Delivered a clean Python script for a one-time local run on Windows to process a large list of domains at speed. The script visits each homepage, extracts core content signals including page title, meta description, first H1, and a short text snippet, then sends the structured payload to the ChatGPT API using client-provided classification instructions. Final classifications and scraped fields are exported to CSV for immediate analysis. The implementation uses requests, BeautifulSoup, and lightweight concurrency to improve throughput while keeping setup simple.',
        metrics: [
            '5,000 domains processed',
            'Requests + BeautifulSoup',
            'ChatGPT API classification',
            'CSV export output',
        ],
        accent: '#06b6d4',
        featured: false,
        icon: 'Bot',
        images: [
            '/projects/ai_websites_classification/ai_websites_classification_1.png',
        ],
        systems: ['docu-brain'],
    },
    {
        slug: 'scoutbrief-mvp-automation',
        title: 'ScoutBrief MVP Automation for Sports Insights',
        outcome:
            'Scouting form responses turned into consistent summaries in Notion, ready for the team to review and share.',
        contribution:
            'Form intake, structured summary generation, Notion delivery, and a recorded handover for a lightweight internal MVP.',
        services: ['form-to-report-automation'],
        category: 'AI Automation',
        shortDescription:
            'Built a lightweight no-code MVP that turns scouting form submissions into structured AI summaries and saves them directly to Notion for team collaboration.',
        fullDescription:
            'For this project, I built a fixed-scope internal MVP to help sports assistants structure, summarize, and share scouting insights more efficiently. The solution uses a simple Tally/Typeform input form connected through Make (or Zapier) to OpenAI, where prompt-driven logic generates clear structured written outputs from raw scouting notes. The generated outputs are then saved to a Notion page/database so the team can review and communicate insights quickly in one place. I also delivered a short Loom walkthrough at handoff. This was intentionally designed as a lightweight no-code implementation without auth, accounts, or additional app layers.',
        metrics: [
            'Tally/Typeform intake',
            'Make + OpenAI workflow',
            'Notion auto-publishing',
            'Loom handoff',
        ],
        accent: '#0ea5e9',
        featured: true,
        icon: 'Zap',
        images: [
            '/projects/scoutbrief/scoutbrief_1.png',
            '/projects/scoutbrief/scoutbrief_2.png',
            '/projects/scoutbrief/scoutbrief_3.png',
        ],
        systems: ['docu-brain'],
    },
    {
        slug: 'smart-email-classification-system',
        title: 'Smart Email Classification System with n8n, GPT, and MySQL',
        outcome:
            'Incoming Gmail messages categorized and stored as structured MySQL records for SaaS support operations.',
        contribution:
            'n8n workflow connecting Gmail, GPT classification, and structured MySQL records for SaaS support operations.',
        services: ['email-classification-routing'],
        category: 'AI Automation',
        shortDescription:
            'AI-powered n8n workflow that classifies incoming Gmail messages with GPT and stores structured results in MySQL for faster SaaS support operations.',
        fullDescription:
            "I built an AI-powered workflow automation using n8n for a SaaS client who handles customer queries via Gmail. The system reads incoming emails, uses OpenAI's GPT model to categorize them as support or general, and stores the results in a MySQL database. This AI automation streamlined email management and laid the groundwork for future enhancements like automated AI replies. It is a strong use case of n8n, AI integration, and workflow automation for SaaS efficiency.",
        metrics: [
            'n8n workflow',
            'GPT classification',
            'Gmail processing',
            'MySQL storage',
        ],
        accent: '#14b8a6',
        featured: true,
        icon: 'Bot',
        images: [
            '/projects/smart_email_classification/smart_email_classification_1.png',
            '/projects/smart_email_classification/smart_email_classification_2.png',
        ],
        systems: ['ai-support-agent'],
    },
    {
        slug: 'scoring-articles-automation',
        title: 'Scoring Articles Automation',
        contribution:
            'Gmail URL intake, article extraction, rubric-based scoring, and Google Sheets delivery in n8n.',
        services: ['website-content-classification'],
        category: 'AI Automation',
        shortDescription:
            'n8n workflow that detects Gmail messages, extracts article URLs, scores content against a custom rubric, and logs qualified items into Google Sheets.',
        fullDescription:
            'Designed and implemented an n8n automation to streamline content evaluation. The workflow detects incoming Gmail messages, extracts article and blog URLs with DeepSeek v3.1, then routes them to a secondary workflow. Content is retrieved via Firecrawl, scored against a custom rubric, and high-scoring items are logged directly into Google Sheets. Built-in error handling and timeouts ensure smooth, reliable performance, cutting hours of manual review into a fully automated process.',
        metrics: [
            'n8n automation',
            'DeepSeek v3.1 parsing',
            'Firecrawl extraction',
            'Google Sheets logging',
        ],
        accent: '#06b6d4',
        featured: true,
        icon: 'Bot',
        images: [
            '/projects/scoring_articles_automation/scoring_articles_automation_1.png',
            '/projects/scoring_articles_automation/scoring_articles_automation_2.png',
            '/projects/scoring_articles_automation/scoring_articles_automation_3.png',
        ],
        systems: ['docu-brain'],
    },
    {
        slug: 'lead-scoring-automation',
        title: 'Lead Scoring Automation',
        outcome:
            'An existing company list enriched with research and rule-based qualification scores in Google Sheets.',
        contribution:
            'Make.com company research, structured Google Sheets enrichment, rule-based scoring, and qualification reports.',
        services: ['lead-enrichment-scoring'],
        category: 'AI Automation',
        shortDescription:
            "Make.com workflow that researches each company's details with Grok xAI, enriches lead data, and exports structured results to Google Sheets.",
        fullDescription:
            'The client had a Google Sheet of real estate company leads that needed enrichment and scoring based on a specific rubric. I built a Make.com workflow that researched each company online using Grok xAI, parsed the findings, and exported clean structured data into Google Sheets. Then I implemented rule-based lead scoring and generated detailed qualification reports so the client could prioritize high-value opportunities faster.',
        metrics: [
            'Make.com workflow',
            'Grok xAI enrichment',
            'Google Sheets export',
            'Automated lead scoring',
        ],
        accent: '#0ea5e9',
        featured: true,
        icon: 'Bot',
        images: [
            '/projects/lead_scoring_automation/lead_scoring_automation_1.png',
            '/projects/lead_scoring_automation/lead_scoring_automation_2.png',
        ],
        systems: ['docu-brain'],
    },
    {
        slug: 'employee-reports-evaluation-bot',
        title: 'AI Employee Report Evaluation Bot',
        category: 'AI Automation',
        shortDescription:
            'Telegram + Zapier + GPT-4 system that scores daily employee reports, sends structured feedback, and delivers the manager an executive summary within minutes.',
        fullDescription:
            'For this client, I built an automated QA layer around their daily employee reports so the manager no longer has to manually review each one. Employees submit their updates through a Telegram bot, where a Zapier workflow validates required sections and sends the content to OpenAI GPT-4. The AI evaluates reports against 8 quality criteria—numbers, deadlines, risks, blockers, links, and next steps—then sends each employee a private scored breakdown and improvement suggestions. In parallel, it generates a concise executive summary for the manager highlighting scores, gaps, risks, and decisions waiting on them. All results are logged in Google Sheets so performance can be tracked over time and accountability stays consistent across the entire team.',
        metrics: [
            'Telegram intake + Zapier workflow',
            'GPT-4 quality scoring across 8 criteria',
            'Instant employee feedback messages',
            'Executive summaries + Google Sheets logging',
        ],
        accent: '#14b8a6',
        featured: true,
        icon: 'Bot',
        images: [
            '/projects/employee_reports_evaluation/employee_reports_evaluation_1.png',
        ],
        systems: ['docu-brain'],
    },
];
