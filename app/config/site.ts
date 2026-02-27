// ─────────────────────────────────────────────
// Site Configuration — Single source of truth
// Edit this file to update content across the entire site.
// ─────────────────────────────────────────────

export const siteConfig = {

    // ── Personal / Brand ──────────────────────────
    personal: {
        name: 'Beelodev',
        brandName: 'Beelodev',
        email: 'support@beelodev.com',
        phone: '+92 303 846 6058',
        location: 'Pakistan · Remote Worldwide',
        domain: 'beelodev.com',
        tagline: 'Remove busywork, cut costs, scale without hiring — automation systems that run your business.',
        responseTime: 'Response within 1 hour',
        availability: {
            available: true,
            message: 'Available for new projects',
        },
        booking: {
            url: 'https://calendly.com/nabeelsharafat/30min',
            label: 'Book a Free Discovery Call',
            shortLabel: 'Free Consultation',
            duration: '30 min',
            description: 'Discuss your project goals, get expert advice, and receive a tailored roadmap — completely free, no strings attached.',
        },
    },

    // ── Navigation ────────────────────────────────
    navLinks: [
        { name: 'Systems', href: '#systems' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ],

    // ── Hero Section ──────────────────────────────
    hero: {
        headline: {
            line1: 'Stop Hiring.',
            line2: 'Start Scaling.',
        },
        subtitle:
            'Choose one of 3 proven automation systems and we will install it for your business - fast, secure, and built to scale.',
        cta: {
            primary: { label: 'View the 3 Systems', href: '#systems' },
            secondary: { label: 'Book a Free Discovery Call', href: '#book' },
        },
        capabilities: [
            { icon: 'Bot', label: 'AI Support Agent' },
            { icon: 'Receipt', label: 'Auto-Invoicing' },
            { icon: 'FileText', label: 'Docu-Brain' },
        ],
        stats: [
            { value: '300+', label: 'Systems Built' },
            { value: '24/7', label: 'Uptime' },
            { value: '100%', label: 'Success Rate' },
        ],
    },

    // ── Automation Systems ────────────────────────
    automationSystems: {
        title: "Automation Systems That Run Your Business",
        systems: [
            {
                name: "24/7 AI Support Agent",
                shortHeadline: "Cut support costs by 60% while improving response times and customer satisfaction.",
                bullets: [
                    "Customers get instant answers instead of waiting hours",
                    "Your team only handles complex issues that need human judgment",
                    "Support costs drop as volume grows",
                    "Customer satisfaction scores increase",
                ],
                closingLine: "Your support operation runs itself while you sleep.",
                icon: 'Bot',
                accent: '#0ea5e9',
            },
            {
                name: "Zero-Touch Invoice Processing",
                shortHeadline: "Eliminate invoice data entry and prevent accounting mistakes that cost money.",
                bullets: [
                    "Invoices flow from email to your accounting system automatically",
                    "No manual typing means zero entry errors",
                    "Your team stops doing data entry and starts analyzing results",
                    "Month-end closing happens faster with accurate data",
                ],
                closingLine: "Your accounting team stops typing and starts thinking.",
                icon: 'Receipt',
                accent: '#06b6d4',
            },
            {
                name: "Smart Document Intelligence System",
                shortHeadline: "Transform document chaos into organized, searchable business intelligence.",
                bullets: [
                    "Documents become searchable databases instead of file folders",
                    "Key insights surface automatically without manual reading",
                    "Your team finds information in seconds instead of hours",
                    "Decision-making speeds up with instant access to data",
                ],
                closingLine: "Your documents become a competitive advantage.",
                icon: 'FileText',
                accent: '#14b8a6',
            },
        ],
    },

    // ── Platform Stats ────────────────────────────
    platformStats: {
        platforms: [
            {
                name: 'Upwork',
                logo: '/icons/upwork-icon.svg',
                profileImage: '/profiles/upwork.png',
                profileImageAlt: 'Upwork profile screenshot',
                badge: 'Top Rated',
                badgeIcon: 'Award',
                rating: '5.0',
                reviews: '50+',
                success: '100%',
                earned: '$30K+',
                accent: '#0ea5e9',
                url: 'https://www.upwork.com/freelancers/syednabeel24',
            },
            {
                name: 'Fiverr',
                logo: '/icons/fiverr-icon.svg',
                profileImage: '/profiles/fiverr.png',
                profileImageAlt: 'Fiverr profile screenshot',
                badge: 'Level 1 Seller',
                badgeIcon: 'TrendingUp',
                rating: '4.9',
                reviews: '400+',
                success: '100%',
                earned: '$30K+',
                accent: '#06b6d4',
                url: 'https://www.fiverr.com/s/VYAjE8z',
            },
        ],
        aggregate: [
            { value: '100+', label: 'Systems Deployed' },
            { value: '100%', label: 'Client Success Rate' },
            { value: '30+', label: 'Markets Served' },
        ],
    },

    // ── Services ──────────────────────────────────
    services: [
        {
            icon: 'Bot',
            title: '24/7 AI Support Agent',
            description: 'An AI support agent that resolves common questions instantly, hands off complex cases, and reduces support workload.',
            deliverables: ['Knowledge Base Setup', 'Multi-channel Support', 'Human Handoff', 'Conversation Analytics'],
            accent: '#0ea5e9',
            stat: 'Faster responses',
        },
        {
            icon: 'Receipt',
            title: 'Zero-Touch Invoice Processing',
            description: 'Invoice extraction + validation + routing so your team stops doing data entry and your books stay accurate.',
            deliverables: ['Email/Portal Parsing', 'Line-item Extraction', 'Approvals', 'Audit Logs'],
            accent: '#06b6d4',
            stat: 'Zero entry errors',
        },
        {
            icon: 'FileText',
            title: 'Smart Document Intelligence System',
            description: 'Turn documents into searchable, structured data with summaries and insights your team can use instantly.',
            deliverables: ['Bulk Processing', 'Searchable Database', 'Summaries/Insights', 'Secure Handling'],
            accent: '#14b8a6',
            stat: 'Find answers in seconds',
        },
    ],

    // ── Packages / Pricing ────────────────────────
    packages: {
        plans: [
            {
                name: 'AI Support Agent',
                tagline: 'Cut support costs while improving customer experience',
                price: '$1099',
                period: 'one-time setup',
                icon: 'Bot',
                accent: '#0ea5e9',
                bestFor: 'Teams drowning in repetitive customer questions.',
                timeline: '7-14 days',
                integrations: ['Website chat', 'WhatsApp', 'Email', 'Docs/FAQ'],
                features: [
                    'Custom Knowledge Base Setup',
                    'Multi-Channel Integration (Web/WhatsApp)',
                    'Human Handoff Logic',
                    'Conversation Analytics',
                    '30 Days of Tuning & Support',
                    'Self-Hosted or Cloud Option',
                    '2 Weeks Free Support',
                ],
                cta: 'Schedule a Call',
                popular: false,
            },
            {
                name: 'Auto-Invoicing',
                tagline: 'Eliminate invoice data entry and prevent accounting errors',
                price: '$1299',
                period: 'one-time setup',
                icon: 'Receipt',
                accent: '#06b6d4',
                bestFor: 'Finance teams processing invoices every day.',
                timeline: '10-21 days',
                integrations: ['Gmail/Outlook', 'QuickBooks', 'Xero', 'Google Drive'],
                features: [
                    'Email & Portal Parsing',
                    'Line-Item Extraction',
                    'QuickBooks/Xero Integration',
                    'Approval Workflows',
                    'Error Handling Dashboard',
                    'Audit Logs & Reporting',
                    '2 Weeks Free Support',
                ],
                cta: 'Schedule a Call',
                popular: true,
            },
            {
                name: 'Docu-Brain',
                tagline: 'Transform document chaos into searchable business intelligence',
                price: '$1999',
                period: 'starting at',
                icon: 'FileText',
                accent: '#14b8a6',
                bestFor: 'Ops teams buried in PDFs, contracts, and forms.',
                timeline: '14-28 days',
                integrations: ['Google Drive', 'Notion', 'Airtable', 'Custom API'],
                features: [
                    'Custom Document Models',
                    'Bulk Processing Pipeline',
                    'Searchable Database Setup',
                    'Insight Generation & Summary',
                    'API Integration',
                    'Secure Data Handling',
                    '2 Weeks Free Support',
                ],
                cta: 'Schedule a Call',
                popular: false,
            },
        ],
        bottomNote: 'Need a custom system? We build complete automation solutions that transform how you operate.',
    },

    // ── Portfolio / Projects ──────────────────────
    portfolio: [],

    // ── Skills ────────────────────────────────────
    skills: {
        categories: [
            {
                title: 'Frontend',
                icon: 'Code2',
                accent: '#0ea5e9',
                tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
            },
            {
                title: 'Backend',
                icon: 'Database',
                accent: '#06b6d4',
                tools: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
            },
            {
                title: 'AI & Automation',
                icon: 'Cpu',
                accent: '#14b8a6',
                tools: ['OpenAI API', 'Claude API', 'LangChain', 'Make.com', 'n8n', 'Zapier'],
            },
            {
                title: 'Mobile',
                icon: 'Smartphone',
                accent: '#0ea5e9',
                tools: ['React Native', 'Expo', 'iOS', 'Android', 'Push Notifications', 'App Store'],
            },
            {
                title: 'WordPress',
                icon: 'Globe',
                accent: '#06b6d4',
                tools: ['Custom Themes', 'WooCommerce', 'Elementor', 'SEO', 'Performance', 'Plugins'],
            },
            {
                title: 'Infrastructure',
                icon: 'Cloud',
                accent: '#14b8a6',
                tools: ['AWS', 'Vercel', 'Supabase', 'Docker', 'CI/CD', 'GitHub Actions'],
            },
        ],
        highlights: [
            { number: '5+', label: 'Years Experience' },
            { number: '12+', label: 'Technologies' },
            { number: '6', label: 'Specializations' },
        ],
        extraTools: ['Git', 'Figma', 'Jira', 'Notion', 'Slack', 'HubSpot', 'Stripe', 'Firebase'],
        extraToolsMore: '+20 more',
    },

    // ── Testimonials ──────────────────────────────
    testimonials: {
        items: [
            {
                text: 'Excellent freelancer - Syed solved problems quickly and went far and beyond the job description by making the data even more useful (self-updating) and recorded a little video to clear up any of my confusions. Highly recommended!',
                author: 'Alexander Limberg',
                initials: 'AL',
                platform: 'Upwork',
                accent: '#0ea5e9',
                featured: false,
            },
            {
                text: 'He did a great job managing my project from start to finish. He created everything I needed, pulled data from multiple sites, organized it in a way that actually made sense, and set everything up so it could run without me having to watch it. He is currently managing the project and keeping everything updated, and I can already see the results. Reliable, efficient, and very easy to work with.',
                author: 'Robert Johnson',
                initials: 'RJ',
                platform: 'Upwork',
                accent: '#06b6d4',
                featured: true,
            },
            {
                text: 'Syed Nabeel is an excellent full-stack developer who has help us automate our office workflow. I highly recommend his services',
                author: 'Tony Hyou',
                initials: 'TH',
                platform: 'Upwork',
                accent: '#14b8a6',
                featured: false,
            },
            {
                text: 'It was a pleasure to work with Syed. He was proactive in understanding my needs and improved my planned outcome. He went above and beyond to solve problems so that we could reach the desired goal together. He has deep knowledge of working with OpenAI APIs and quickly wrote code to manage the project',
                author: 'Adam Will',
                initials: 'AW',
                platform: 'Upwork',
                accent: '#0ea5e9',
                featured: false,
            },
            {
                text: 'Syed was very professional and patient during the whole project. Communication was fast and clear, and he delivered the Avatar App exactly as requested. Deployment and setup on Vercel were handled very well. We will continue working together on the AutoChat part and upcoming improvements. Overall, I\'m satisfied with the cooperation and looking forward to the next steps. Thank you!',
                author: 'George Jojje',
                initials: 'GJ',
                platform: 'Fiverr',
                accent: '#06b6d4',
                featured: false,
            },
            {
                text: 'Outstanding Work! Nabeel did an excellent job bringing my vision to life. He improved the natural language understanding, built in real-time troubleshooting, and made the bot smarter and more interactive. He was responsive, detail oriented, and delivered everything as promised. I\'m very happy with the results and would definitely recommend him to anyone looking to build a powerful AI automation system.',
                author: 'Steph Hon',
                initials: 'SH',
                platform: 'Fiverr',
                accent: '#14b8a6',
                featured: true,
            },
        ],
        aggregateRating: '4.9',
        aggregateLabel: 'across 100+ projects',
        trustBanner: [
            { value: '100+', label: 'Projects' },
            { value: '100%', label: '5-Star' },
            { value: '30+', label: 'Countries' },
        ],
    },

    // ── Contact ───────────────────────────────────
    contact: {
        methods: [
            { icon: 'Mail', label: 'Email', value: 'support@beelodev.com', href: 'mailto:support@beelodev.com' },
            { icon: 'MessageSquare', label: 'WhatsApp', value: '+92 303 846 6058', href: 'https://wa.me/923038466058' },
            { icon: 'MapPin', label: 'Location', value: 'Pakistan · Remote Worldwide', href: '#' },
        ],
        socialPlatforms: [
            { label: 'Upwork', href: 'https://www.upwork.com/freelancers/syednabeel24' },
            { label: 'Fiverr', href: 'https://www.fiverr.com/s/VYAjE8z' },
            { label: 'Facebook', href: 'https://www.facebook.com/people/Beelodev/100070024941028/' },
            { label: 'Instagram', href: 'https://www.instagram.com/beelo_dev/' },
        ],
        budgetRanges: [
            'Under $500',
            '$500 – $1,500',
            '$1,500 – $5,000',
            '$5,000 – $15,000',
            '$15,000+',
        ],
        serviceOptions: [
            'Remove Busywork',
            'Cut Operating Costs',
            'Scale Without Hiring',
            'Automate Repetitive Tasks',
            'Other',
        ],
    },

    // ── Footer ────────────────────────────────────
    footer: {
        services: [
            { label: 'AI Support Agent', href: '#pricing' },
            { label: 'Auto-Invoicing', href: '#pricing' },
            { label: 'Docu-Brain', href: '#pricing' },
        ],
        company: [
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Reviews', href: '#testimonials' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
        ],
        socials: [
            { label: 'Upwork', href: 'https://www.upwork.com/freelancers/syednabeel24' },
            { label: 'Fiverr', href: 'https://www.fiverr.com/s/VYAjE8z' },
            { label: 'Facebook', href: 'https://www.facebook.com/people/Beelodev/100070024941028/' },
            { label: 'Instagram', href: 'https://www.instagram.com/beelo_dev/' },
            { label: 'GitHub', href: 'https://github.com/nabeel-dev1340' },
        ],
        ctaBanner: {
            headline: 'Ready to remove the busywork?',
            subtitle: "Let's install systems that run your business while you focus on growth.",
            cta: 'Get Started',
        },
    },
} as const;

// Type helpers — use these if you need to type-check config slices in components
export type SiteConfig = typeof siteConfig;
