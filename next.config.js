const TwinMacro = require('./twin-macro.cjs');

/** @type {import('next').NextConfig} */
module.exports = TwinMacro({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
