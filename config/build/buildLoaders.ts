import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = buildBabelLoader(isDev);

    const urlLoader = {
        test: /\.png/,
        type: 'asset/resource',
    };

    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [babelLoader, typeScriptLoader, cssLoader, svgLoader, urlLoader];
}
