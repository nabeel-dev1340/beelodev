import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-md w-full text-center">
        <p className="text-xs font-mono uppercase tracking-wider text-electric-blue mb-4">404</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-neutral-400 leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
          Try one of the links below to get back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors"
            style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/systems"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Search className="w-4 h-4" />
            View Systems
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center text-sm text-neutral-500">
          <Link href="/blog" className="hover:text-neutral-300 transition-colors">Blog</Link>
          <span>·</span>
          <Link href="/about" className="hover:text-neutral-300 transition-colors">About</Link>
          <span>·</span>
          <Link href="/process" className="hover:text-neutral-300 transition-colors">Process</Link>
          <span>·</span>
          <Link href="/sitemap-page" className="hover:text-neutral-300 transition-colors">Sitemap</Link>
        </div>
      </div>
    </main>
  );
}
