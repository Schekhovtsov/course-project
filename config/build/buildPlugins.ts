import ReactRefreshWebpaclPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    analyze,
    project,
    apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(isDev),
                __PROJECT__: JSON.stringify(project),
            })
        );

        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: !!analyze,
            })
        );

        plugins.push(new ReactRefreshWebpaclPlugin());

        plugins.push(
            new CircularDependencyPlugin({
                exclude: /a\.js|node_modules/,
                failOnError: true,
            })
        );

        plugins.push(
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true,
                    },
                    mode: 'write-references',
                },
            })
        );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExctractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        );

        plugins.push(
            new CopyPlugin({
                patterns: [{ from: paths.locales, to: paths.buildLocales }],
            })
        );
    }

    return plugins;
}
