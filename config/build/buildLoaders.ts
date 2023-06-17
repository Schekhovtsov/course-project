import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ isDev, isTsx: true });

    const urlLoader = {
        test: /\.png/,
        type: 'asset/resource',
    };

    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(isDev);

    // const typeScriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typeScriptLoader,
        cssLoader,
        svgLoader,
        urlLoader,
    ];
}
