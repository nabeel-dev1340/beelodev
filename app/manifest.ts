import { MetadataRoute } from 'next';
import { siteConfig } from './config/site';

export default function manifest(): MetadataRoute.Manifest {
  const { personal } = siteConfig;

  return {
    name: `${personal.brandName} — AI Automation Systems for Small Business`,
    short_name: 'Beelodev',
    description: personal.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#04040a',
    theme_color: '#0ea5e9',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity'],
    lang: 'en-US',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
