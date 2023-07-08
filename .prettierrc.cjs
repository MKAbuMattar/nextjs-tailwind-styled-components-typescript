/** @type {import('prettier').Config} */
const prettierConfig = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
};

module.exports = prettierConfig;