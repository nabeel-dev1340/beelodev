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
            line1: 'We Build Digital',
            line2: 'Experiences',
        },
        subtitle:
            'AI automation, full-stack development, and mobile apps — engineered for scale, designed\u00a0for\u00a0impact.',
        cta: {
            primary: { label: 'View Packages', href: '#packages' },
            secondary: { label: 'See Our Work', href: '#portfolio' },
        },
        capabilities: [
            { icon: 'Bot', label: 'AI Automation' },
            { icon: 'Code', label: 'Web Development' },
            { icon: 'Smartphone', label: 'Mobile Apps' },
            { icon: 'Globe', label: 'WordPress' },
        ],
        stats: [
            { value: '300+', label: 'Projects Delivered' },
            { value: '4.9', label: 'Client Rating' },
            { value: '100%', label: 'Success Rate' },
        ],
    },

    // ── Tech Marquee ──────────────────────────────
    techMarquee: [
        'React.js', 'Next.js', 'Node.js', 'Python', 'AI Automation',
        'WordPress', 'React Native', 'OpenAI API', 'Make.com', 'PostgreSQL',
        'MongoDB', 'TypeScript', 'Tailwind CSS', 'GraphQL',
    ],

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
                name: 'Starter',
                tagline: 'Launch your presence',
                price: '$499',
                period: 'one-time',
                icon: 'Zap',
                accent: '#0ea5e9',
                features: [
                    '5-page WordPress website',
                    'Mobile responsive design',
                    'Basic SEO setup',
                    'Contact form integration',
                    '2 rounds of revisions',
                    '1 week delivery',
                ],
                cta: 'Get Started',
                popular: false,
            },
            {
                name: 'Growth',
                tagline: 'Scale with AI power',
                price: '$1,499',
                period: 'one-time',
                icon: 'Sparkles',
                accent: '#06b6d4',
                features: [
                    'Custom WordPress or Next.js site',
                    'AI chatbot integration',
                    'Lead capture automation',
                    'CRM integration (HubSpot/Notion)',
                    'Advanced SEO & analytics',
                    'Priority support for 30 days',
                ],
                cta: 'Start Growing',
                popular: true,
            },
            {
                name: 'Enterprise',
                tagline: 'Full-scale custom build',
                price: '$4,999+',
                period: 'starting at',
                icon: 'Rocket',
                accent: '#14b8a6',
                features: [
                    'Full-stack custom web app',
                    'Mobile app (iOS + Android)',
                    'Advanced AI automation suite',
                    'Custom API development',
                    'Dedicated support & maintenance',
                    'White-glove onboarding',
                ],
                cta: 'Contact Us',
                popular: false,
            },
        ],
        bottomNote: 'All plans include free project consultation. Need something custom?',
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
