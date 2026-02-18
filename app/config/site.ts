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
        tagline: 'AI automation, full-stack development, WordPress & mobile apps — built to last.',
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
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Packages', href: '#packages' },
        { name: 'Contact', href: '#contact' },
    ],

    // ── Hero Section ──────────────────────────────
    hero: {
        headline: {
            line1: 'Stop Hiring.',
            line2: 'Start Automating.',
        },
        subtitle:
            'Scale your operations and reclaim your time with intelligent systems that never sleep.',
        cta: {
            primary: { label: 'Explore Systems', href: '#automation-systems' },
            secondary: { label: 'See Impact', href: '#portfolio' },
        },
        capabilities: [
            { icon: 'Bot', label: 'AI Agents' },
            { icon: 'Zap', label: 'Workflow Auto' },
            { icon: 'Database', label: 'Data Systems' },
            { icon: 'BarChart3', label: 'Dashboards' },
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
                shortHeadline: "Reduce support tickets and give customers instant answers without hiring more staff.",
                bullets: [
                    "Automatically answers most customer questions",
                    "Works 24/7 with no downtime",
                    "Escalates complex issues to your team",
                    "Improves customer satisfaction",
                ],
                closingLine: "Turn your support inbox into a self-running system.",
                icon: 'Bot',
                accent: '#0ea5e9',
            },
            {
                name: "Zero-Touch Invoice Processing",
                shortHeadline: "Eliminate manual invoice entry and prevent costly accounting errors.",
                bullets: [
                    "Captures invoices automatically",
                    "Extracts key data accurately",
                    "Sends data directly into your systems",
                    "Speeds up month-end closing",
                ],
                closingLine: "Invoices go from inbox to accounting with no typing.",
                icon: 'Receipt',
                accent: '#06b6d4',
            },
            {
                name: "Smart Document Intelligence System",
                shortHeadline: "Turn large volumes of documents into structured, usable data.",
                bullets: [
                    "Extracts key information automatically",
                    "Makes documents searchable",
                    "Generates summaries and insights",
                    "Exports clean data to your tools",
                ],
                closingLine: "Stop reading documents. Start using their data.",
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
                badge: 'Top Rated',
                badgeIcon: 'Award',
                rating: '5.0',
                reviews: '40+',
                success: '100%',
                earned: '$30K+',
                accent: '#0ea5e9',
                url: 'https://www.upwork.com/freelancers/syednabeel24',
            },
            {
                name: 'Fiverr',
                logo: '/icons/fiverr-icon.svg',
                badge: 'Level 2 Seller',
                badgeIcon: 'TrendingUp',
                rating: '4.9',
                reviews: '200+',
                success: '100%',
                earned: '$30K+',
                accent: '#06b6d4',
                url: 'https://www.fiverr.com/s/VYAjE8z',
            },
        ],
        aggregate: [
            { value: '300+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '30+', label: 'Countries Served' },
        ],
    },

    // ── Services ──────────────────────────────────
    services: [
        {
            icon: 'Bot',
            title: 'AI Automation',
            description: 'Intelligent agents and workflows that eliminate repetitive tasks and work around the clock.',
            deliverables: ['Custom AI Chatbots', 'Voice Agents', 'Workflow Automation', 'CRM Integration'],
            accent: '#0ea5e9',
            stat: '30+ hrs/week saved',
        },
        {
            icon: 'Code',
            title: 'Full Stack Development',
            description: 'End-to-end web applications built with modern frameworks and scalable architecture.',
            deliverables: ['React / Next.js', 'Node.js APIs', 'PostgreSQL', 'Cloud Deploy'],
            accent: '#06b6d4',
            stat: '99.9% uptime',
        },
        {
            icon: 'Globe',
            title: 'WordPress Development',
            description: 'Fast, beautiful, SEO-optimized websites that convert visitors into customers.',
            deliverables: ['Custom Themes', 'WooCommerce', 'SEO Optimization', 'Speed Tuning'],
            accent: '#14b8a6',
            stat: '<2s load time',
        },
        {
            icon: 'Smartphone',
            title: 'Mobile Development',
            description: 'Cross-platform mobile apps that feel native on both iOS and Android.',
            deliverables: ['React Native', 'iOS & Android', 'Push Notifications', 'App Store Launch'],
            accent: '#0ea5e9',
            stat: '50K+ downloads',
        },
    ],

    // ── Packages / Pricing ────────────────────────
    packages: {
        plans: [
            {
                name: 'AI Support Agent',
                tagline: 'Automate customer queries 24/7',
                price: '$1099',
                period: 'one-time setup',
                icon: 'Bot',
                accent: '#0ea5e9',
                features: [
                    'Custom Knowledge Base Setup',
                    'Multi-Channel Integration (Web/WhatsApp)',
                    'Human Handoff Logic',
                    'Conversation Analytics',
                    '30 Days of Tuning & Support',
                    'Self-Hosted or Cloud Option',
                ],
                cta: 'Get Support Agent',
                popular: false,
            },
            {
                name: 'Auto-Invoicing',
                tagline: 'End manual data entry forever',
                price: '$1299',
                period: 'one-time setup',
                icon: 'Receipt',
                accent: '#06b6d4',
                features: [
                    'Email & Portal Parsing',
                    'Line-Item Extraction',
                    'QuickBooks/Xero Integration',
                    'Approval Workflows',
                    'Error Handling Dashboard',
                    'Audit Logs & Reporting',
                ],
                cta: 'Automate Invoices',
                popular: true,
            },
            {
                name: 'Docu-Brain',
                tagline: 'Unlock data from documents',
                price: '$1999',
                period: 'starting at',
                icon: 'FileText',
                accent: '#14b8a6',
                features: [
                    'Custom Document Models',
                    'Bulk Processing Pipeline',
                    'Searchable Database Setup',
                    'Insight Generation & Summary',
                    'API Integration',
                    'Secure Data Handling',
                ],
                cta: 'Unlock Your Data',
                popular: false,
            },
        ],
        bottomNote: 'Need a custom automation solution? Custom builds start at $5k.',
    },

    // ── Portfolio / Projects ──────────────────────
    portfolio: [
        {
            title: 'AI Voice Agent Platform',
            category: 'AI Automation',
            description: 'Built a custom voice AI system that handles customer support calls 24/7, reducing response times by 80% and saving $120K/year in staffing costs.',
            icon: 'Bot',
            metrics: ['24/7 uptime', '80% faster', '$120K saved'],
            accent: '#0ea5e9',
            featured: true,
        },
        {
            title: 'Analytics Dashboard',
            category: 'Full Stack',
            description: 'Real-time analytics platform processing 1M+ events per day with instant insights and custom reporting.',
            icon: 'BarChart3',
            metrics: ['1M+ events/day', '99.9% uptime'],
            accent: '#06b6d4',
            featured: false,
        },
        {
            title: 'E-Commerce Store',
            category: 'WordPress',
            description: 'High-converting WooCommerce store with custom checkout flow, resulting in 35% increase in conversions.',
            icon: 'ShoppingCart',
            metrics: ['+35% conversions', '2s load time'],
            accent: '#14b8a6',
            featured: false,
        },
        {
            title: 'Fitness Tracking App',
            category: 'Mobile',
            description: 'Cross-platform React Native app with workout tracking, social features, and 50K+ downloads.',
            icon: 'Smartphone',
            metrics: ['50K+ downloads', '4.8★ rating'],
            accent: '#0ea5e9',
            featured: true,
        },
        {
            title: 'Workflow Automation',
            category: 'AI Automation',
            description: 'Zapier-style automation platform for SMBs, connecting 50+ SaaS tools with intelligent triggers.',
            icon: 'Zap',
            metrics: ['50+ integrations', '10K tasks/day'],
            accent: '#06b6d4',
            featured: false,
        },
        {
            title: 'Health Monitoring',
            category: 'Full Stack',
            description: 'IoT-connected health tracking dashboard with real-time vitals monitoring and alert system.',
            icon: 'Activity',
            metrics: ['Real-time data', 'HIPAA compliant'],
            accent: '#14b8a6',
            featured: false,
        },
    ],

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
                text: 'Nabeel delivered an exceptional AI chatbot that transformed our customer support. Response quality was incredible and the automation saved us 30+ hours per week.',
                author: 'James Mitchell',
                role: 'CEO, ShopFlow USA',
                initials: 'JM',
                platform: 'Upwork',
                accent: '#0ea5e9',
                featured: true,
            },
            {
                text: "The full-stack app was delivered 3 days ahead of schedule, works perfectly, and the code quality is something I've rarely seen. Will absolutely hire again.",
                author: 'Sarah Collins',
                role: 'CTO, Nexify London',
                initials: 'SC',
                platform: 'Upwork',
                accent: '#06b6d4',
                featured: false,
            },
            {
                text: 'Our WordPress site is stunning and loads in under 2 seconds. SEO got us to page 1 of Google within 6 weeks. Worth every penny.',
                author: 'Aisha Rahman',
                role: 'Founder, StyleBoutique',
                initials: 'AR',
                platform: 'Fiverr',
                accent: '#14b8a6',
                featured: false,
            },
            {
                text: 'The React Native app works flawlessly on both iOS and Android. Beelodev communicated clearly throughout, handled edge cases brilliantly, and delivered a polished product.',
                author: 'David Kim',
                role: 'Product Manager, Delivr',
                initials: 'DK',
                platform: 'Upwork',
                accent: '#06b6d4',
                featured: true,
            },
            {
                text: 'Make.com automation eliminated manual data entry. 40 hours of manual work per week, now done automatically. Insane ROI.',
                author: 'Laura Peters',
                role: 'Operations Lead, PropMax',
                initials: 'LP',
                platform: 'Fiverr',
                accent: '#14b8a6',
                featured: false,
            },
            {
                text: 'Honest communication, clean code, fast delivery. The rare developer who understands business and translates requirements into perfect technical solutions.',
                author: "Robert Junior",
                role: 'Director, TechStartup AU',
                initials: 'MO',
                platform: 'Upwork',
                accent: '#0ea5e9',
                featured: false,
            },
        ],
        aggregateRating: '4.9',
        aggregateLabel: 'across 50+ projects',
        trustBanner: [
            { value: '50+', label: 'Projects' },
            { value: '100%', label: '5-Star' },
            { value: '12+', label: 'Countries' },
        ],
    },

    // ── Contact ───────────────────────────────────
    contact: {
        methods: [
            { icon: 'Mail', label: 'Email', value: 'support@beelodev.com', href: 'mailto:support@beelodev.com' },
            { icon: 'MessageSquare', label: 'WhatsApp', value: '+92 303 846 6058', href: '#' },
            { icon: 'MapPin', label: 'Location', value: 'Pakistan · Remote Worldwide', href: '#' },
        ],
        socialPlatforms: [
            { label: 'Upwork', href: 'https://www.upwork.com/freelancers/syednabeel24' },
            { label: 'Fiverr', href: 'https://www.fiverr.com/s/VYAjE8z' },
            { label: 'LinkedIn', href: '#' },
        ],
        budgetRanges: [
            'Under $500',
            '$500 – $1,500',
            '$1,500 – $5,000',
            '$5,000 – $15,000',
            '$15,000+',
        ],
        serviceOptions: [
            'AI Automation',
            'Full Stack Development',
            'WordPress Website',
            'Mobile App Development',
            'Other',
        ],
    },

    // ── Footer ────────────────────────────────────
    footer: {
        services: [
            { label: 'AI Automation', href: '#services' },
            { label: 'Full Stack Dev', href: '#services' },
            { label: 'WordPress', href: '#services' },
            { label: 'Mobile Apps', href: '#services' },
        ],
        company: [
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Reviews', href: '#testimonials' },
            { label: 'Pricing', href: '#packages' },
            { label: 'Contact', href: '#contact' },
        ],
        socials: [
            { label: 'Upwork', href: 'https://www.upwork.com/freelancers/syednabeel24' },
            { label: 'Fiverr', href: 'https://www.fiverr.com/s/VYAjE8z' },
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: '#' },
        ],
        ctaBanner: {
            headline: 'Ready to build something great?',
            subtitle: "Let's turn your idea into a product people love.",
            cta: 'Start a Project',
        },
    },
} as const;

// Type helpers — use these if you need to type-check config slices in components
export type SiteConfig = typeof siteConfig;
