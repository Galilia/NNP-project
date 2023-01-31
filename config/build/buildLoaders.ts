import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev} = options;

    // Если не исользуем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      };

      const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                // Check if contains .module.scss
                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                localIdentName: isDev 
                  ? '[path][name]__[local]--[hash:base64:5]' 
                  : '[hash:base64:8]'
              },
            },
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      };

    return [typescriptLoader, cssLoader];
}