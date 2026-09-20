import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sailing Schools Australia',
    short_name: 'Sailing Schools',
    description: 'Independent guide to sailing schools, courses and qualifications in Australia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f8fb',
    theme_color: '#123354',
    icons: [
      { src: '/icon.png', sizes: '1254x1254', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
