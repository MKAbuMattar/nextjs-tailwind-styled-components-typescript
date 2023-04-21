const path = require('path');
const babelPluginMacros = require('babel-plugin-macros');
const babelPluginStyledComponents = require('babel-plugin-styled-components');
const babelPluginSyntaxTypescript = require('@babel/plugin-syntax-typescript');

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')];

module.exports = function TwinMacro(nextConfig) {
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
};
