import type { Metadata } from "next";
import "./globals.css";
import MeshGradient from "./components/MeshGradient";

export const metadata: Metadata = {
  title: "Beelodev — Build Beyond Limits",
  description: "AI automation, full-stack development, WordPress, and mobile apps — built by Beelodev to help your business scale faster, smarter, and further.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MeshGradient />
        {children}
      </body>
    </html>
  );
}
