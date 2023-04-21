// import TwinMacroConfig from './twin-macro.config.mjs';

// /** @type {import('next').NextConfig} */
// export default TwinMacroConfig({
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n: {
//     locales: ['en'],
//     defaultLocale: 'en',
//   },
// });

const TwinMacroConfig = require('./twin-macro.config.cjs');

/** @type {import('next').NextConfig} */
module.exports = TwinMacroConfig({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
