import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import babelPluginMacros from 'babel-plugin-macros';
import babelPluginStyledComponents from 'babel-plugin-styled-components';
import babelPluginSyntaxTypescript from '@babel/plugin-syntax-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')];

export default function TwinMacro(nextConfig) {
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
                [babelPluginStyledComponents, { ssr: true, displayName: true }],
                [babelPluginSyntaxTypescript, { isTSX: true }],
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
}
