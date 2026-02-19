import type { Metadata } from "next";
import "./globals.css";
import MeshGradient from "./components/MeshGradient";
import { generateMetadata as generateSEOMetadata } from "./lib/seo";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = generateSEOMetadata({
  title: "Beelodev — Build Beyond Limits",
  description:
    "AI automation, full-stack development, WordPress, and mobile apps — built by Beelodev to help your business scale faster, smarter, and further.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
          Preconnect to third-party origins loaded on every page.
          This eliminates ~300 ms of DNS + TLS handshake latency, which Google's
          Core Web Vitals (LCP, FCP) directly reward in rankings.
        */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className="antialiased">
        <StructuredData />
        <MeshGradient />
        {children}
      </body>
    </html>
  );
}
