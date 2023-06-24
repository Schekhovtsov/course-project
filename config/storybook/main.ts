/* eslint-disable import/no-import-module-exports */
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

const path = require('path');

module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config: Configuration) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };

        config.resolve!.modules!.push(paths.src, 'node_modules');

        config.resolve!.extensions!.push('.ts', '.tsx');

        config.resolve!.alias = {
            ...config.resolve?.alias,
            '@': paths.src,
        };

        config.module!.rules = config.module!.rules!.map(
            (rule: RuleSetRule | '...') => {
                if (rule !== '...' && /svg/.test(rule.test as string)) {
                    return {
                        ...rule,
                        exclude: /\.svg$/i,
                    };
                }

                return rule;
            }
        );

        config.module!.rules!.push(buildSvgLoader());
        config.module!.rules!.push(buildCssLoader(true));

        config.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://test.api.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            })
        );

        return config;
    },
};
