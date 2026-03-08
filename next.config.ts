import type { NextConfig } from "next";
import path from "path";
import { existsSync } from "fs";

// Resolve project root — works when cwd is beelodev or parent (e.g. Cursor workspace)
function getProjectRoot(): string {
  const cwd = process.cwd();
  const inBeelodev = cwd.endsWith("beelodev") || cwd.endsWith("beelodev/");
  const candidate = inBeelodev ? cwd : path.join(cwd, "beelodev");
  if (existsSync(path.join(candidate, "node_modules", "tailwindcss"))) {
    return path.resolve(candidate);
  }
  return path.resolve(cwd);
}

const projectRoot = getProjectRoot();

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  webpack: (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.modules = [
      path.join(projectRoot, "node_modules"),
      ...(Array.isArray(config.resolve.modules) ? config.resolve.modules : ["node_modules"]),
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.join(projectRoot, "node_modules", "tailwindcss"),
      "@tailwindcss/postcss": path.join(projectRoot, "node_modules", "@tailwindcss/postcss"),
    };
    return config;
  },
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compression
  compress: true,

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // PostHog reverse proxy — routes /ingest/* through Next.js to avoid ad blockers
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ];
  },

  // Required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,

  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Add any redirects here if needed
      // Example:
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },

  // Enable React strict mode for better development
  reactStrictMode: true,


  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Required for next-mdx-remote with Turbopack
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
