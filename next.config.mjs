import twinMacroConfig from './twin-macro.config.mjs';

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

export default twinMacroConfig(NextConfig, options);

// const twinMacroConfig = require('./twin-macro.config.cjs');

// const options = {
//   ssr: true,
//   displayName: true,
//   isTSX: true,
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n: {
//     locales: ['en'],
//     defaultLocale: 'en',
//   },
// };

// module.exports = twinMacroConfig(nextConfig, options);
