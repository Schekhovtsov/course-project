import { BuildOptions } from 'typescript';

import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderPluginProps extends BuildOptions {
    isTsx?: boolean;
}

export function buildBabelLoader({
    isDev,
    isTsx,
}: BuildBabelLoaderPluginProps) {
    const isProd = !isDev;
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx &&
                        isProd && [
                            babelRemovePropsPlugin,
                            {
                                props: ['data-testid'],
                            },
                        ],
                ].filter(Boolean),
            },
        },
    };
}
