import PWANextInit from 'next-pwa';

import TwinMacroInit from './twin-macro.config.mjs';
import runtimeCachingConfig from './runtime-caching.config.mjs';

const options = {
  ssr: true,
  displayName: true,
  isTSX: true,
};

/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

const TwinMacroConfig = TwinMacroInit(NextConfig, options);

const PWANextConfig = PWANextInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: runtimeCachingConfig,
  publicExcludes: [
    '!robots.txt',
    '!sitemap.xml',
    '!sitemap.*.xml',
    '!app-build-manifest.json',
  ],
  buildExcludes: ['app-build-manifest.json'],
});

export default PWANextConfig(TwinMacroConfig);