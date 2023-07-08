/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || 'http://nextjs-tailwind-styled-components-typescript.vercel.app',
  generateRobotsTxt: true,
};

module.exports = nextSitemapConfig;