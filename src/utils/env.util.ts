export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (() => {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL is not defined, please define it in your .env.local file',
    );
  })();
