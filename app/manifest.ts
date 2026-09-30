import type { MetadataRoute } from 'next';
import { siteConfig } from './config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Beelodev — Custom Automation',
    short_name: 'Beelodev',
    description: siteConfig.personal.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f5f0',
    theme_color: '#346747',
    categories: ['business', 'productivity'],
    lang: 'en',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
  };
}
