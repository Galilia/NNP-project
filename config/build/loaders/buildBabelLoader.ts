export function buildBabelLoader(isDev: boolean) {
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: 'defaults' }],
                ],
                plugins: [
                    ['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }],
                    ['@babel/plugin-proposal-class-properties'],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
