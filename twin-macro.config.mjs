import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import babelPluginMacros from 'babel-plugin-macros';
import babelPluginStyledComponents from 'babel-plugin-styled-components';
import babelPluginSyntaxTypescript from '@babel/plugin-syntax-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')];

/**
 * Next.js plugin to configure the Twin Macro.
 *
 * @param {import('next').NextConfig} nextConfig - The existing Next.js configuration.
 * @param {Object} options - Configuration options for Twin Macro.
 * @param {boolean} options.ssr - Enable server-side rendering for styled components. Default: true.
 * @param {boolean} options.displayName - Enable displaying component names in development. Default: true.
 * @param {boolean} options.isTSX - Enable TypeScript support for Twin Macro. Default: true.
 * @returns {import('next').NextConfig} - The modified Next.js configuration.
 */
const TwinMacroConfig = (nextConfig = {}, options = {}) => {
  const { ssr = true, displayName = true, isTSX = true } = options;
  
  return {
    ...nextConfig,
    webpack(config, { dev, isServer, defaultLoaders }) {
      config.module = {
        ...(config.module || {}),
        rules: [...(config.module?.rules || [])],
      };
      config.module.rules.push({
        test: /\.(tsx|ts|jsx|js)$/,
        include: includedDirs,
        use: [
          defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              plugins: [
                babelPluginMacros,
                [babelPluginStyledComponents, { ssr, displayName }],
                [babelPluginSyntaxTypescript, { isTSX }],
              ],
            },
          },
        ],
      });

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
        };
      }

      return typeof nextConfig.webpack === 'function'
        ? nextConfig.webpack(config, { ...options, defaultLoaders })
        : config;
    },
  };
};

export default TwinMacroConfig;
