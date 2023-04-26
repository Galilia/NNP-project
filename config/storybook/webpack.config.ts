import path from 'path';

import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    const rules = config.module!.rules as RuleSetRule[];
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': path.resolve(__dirname, '..', '..', 'src'),
    };

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = rules.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module!.rules.push(buildCssLoader(true));

    config.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.com'),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
