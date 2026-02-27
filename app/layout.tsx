import type { Metadata } from "next";
import "./globals.css";
import MeshGradient from "./components/MeshGradient";
import { generateMetadata as generateSEOMetadata } from "./lib/seo";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = generateSEOMetadata({
  title: "Beelodev — Build Beyond Limits",
  description:
    "Three proven automation systems for support, invoicing, and document intelligence — installed by Beelodev to cut busywork, reduce costs, and help you scale without hiring.",
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
