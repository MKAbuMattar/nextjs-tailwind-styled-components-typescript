import type { DefaultSeoProps } from 'next-seo';

// utils
import { SITE_URL } from '@/utils/env.util';

const nextSEOConfig: DefaultSeoProps = {
  title: 'Nextjs Tailwind CSS Styled Components with TypeScript',
  description: 'Nextjs Tailwind CSS Styled Components with TypeScript',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: SITE_URL,
    site_name: 'Nextjs Tailwind CSS Styled Components with TypeScript',
  },
  twitter: {
    handle: '@mkabumattar',
    site: '@mkabumattar',
    cardType: 'summary_large_image',
  },
} satisfies DefaultSeoProps;

export default nextSEOConfig;
