import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { generateMetadata as generateSEOMetadata } from './lib/seo';
import StructuredData from './components/StructuredData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadSource from './components/LeadSource';

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: 'Business & Workflow Automation Services',
    description:
      'Business and workflow automation services by Nabeel Sharafat. Automate inbox triage, lead research, reports, and data entry with n8n, Make, Zapier, and Python.',
  }),
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

const themeScript = `(function(){try{var t=localStorage.getItem('beelodev-theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={roboto.variable}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
        <LeadSource />
        {/* Rybbit (self-hosted at rybbit.beelodev.com), through this origin: app/rb/[...path]/route.ts. */}
        <Script
          src="/rb/script.js"
          strategy="lazyOnload"
          data-site-id="03a11865d2c0"
          data-replay-block-selector=".ph-no-capture"
        />
      </body>
    </html>
  );
}
