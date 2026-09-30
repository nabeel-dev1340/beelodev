import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main id="main" className="container section">
      <p className="eyebrow">404 · A missing step</p>
      <h1>This page isn’t here.</h1>
      <p className="lead" style={{ marginTop: 24 }}>
        The link may have changed. Start with the services or return to the homepage.
      </p>
      <div className="button-row">
        <Link className="button" href="/">
          <ArrowLeft size={16} />
          Back to home
        </Link>
        <Link className="text-link" href="/services">
          Explore services <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
