import { MetadataRoute } from 'next';
import { siteConfig } from './config/site';

export default function manifest(): MetadataRoute.Manifest {
  const { personal } = siteConfig;

  return {
    name: personal.brandName,
    short_name: 'Beelodev',
    description: personal.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#04040a',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
