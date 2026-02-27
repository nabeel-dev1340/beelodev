import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Professional blue/cyan palette
                'electric-blue': '#0ea5e9',
                'electric-cyan': '#06b6d4',
                'electric-teal': '#14b8a6',
                'electric-sky': '#38bdf8',
                'electric-indigo': '#3b82f6',

                // Dark backgrounds
                'dark-50': '#fafafa',
                'dark-100': '#f5f5f5',
                'dark-200': '#1a1a1f',
                'dark-300': '#141418',
                'dark-400': '#0f0f12',
                'dark-500': '#0a0a0f',
            },
            fontFamily: {
                display: ['var(--font-syne)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                body: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            animation: {
                'gradient-x': 'gradient-x 6s ease infinite',
                'gradient-y': 'gradient-y 6s ease infinite',
                'gradient-xy': 'gradient-xy 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-delayed': 'float 10s ease-in-out infinite',
                'slide-down': 'slide-down 0.6s ease-out',
                'reveal': 'reveal 0.8s ease-out',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'gradient-y': {
                    '0%, 100%': { backgroundPosition: '50% 0%' },
                    '50%': { backgroundPosition: '50% 100%' },
                },
                'gradient-xy': {
                    '0%, 100%': { backgroundPosition: '0% 0%' },
                    '25%': { backgroundPosition: '100% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    '75%': { backgroundPosition: '0% 100%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'slide-down': {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'reveal': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
