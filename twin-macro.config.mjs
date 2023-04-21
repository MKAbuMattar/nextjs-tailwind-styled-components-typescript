import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import babelPluginMacros from 'babel-plugin-macros';
import babelPluginStyledComponents from 'babel-plugin-styled-components';
import babelPluginSyntaxTypescript from '@babel/plugin-syntax-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const includedDirs = [path.resolve(__dirname, 'src')];

export default function TwinMacro(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options;
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          options.defaultLoaders.babel,
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

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      } else {
        return config;
      }
    },
  };
}
