import type { AppType } from 'next/dist/shared/lib/utils';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

// style
import 'tailwindcss/tailwind.css';
import GlobalStyles from '@/styles/Global.style';

// pkg
import { DefaultSeo } from 'next-seo';

// configs
import SEO from '@/configs/next-seo.config';

const _App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nextjs Tailwind CSS Styled Components with TypeScript</title>
        <meta
          name="description"
          content="Nextjs Tailwind CSS Styled Components with TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default _App;
