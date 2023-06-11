import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve!.modules!.push(
        path.relative(__dirname, '../../src'),
        'node_modules'
    );

    config.resolve!.extensions!.push('.ts', '.tsx');

    config.resolve!.alias = {
        ...config!.resolve!.alias,
        '@/shared': path.resolve(__dirname, '..', '..', 'src', 'shared'),
        '@/entities': path.resolve(__dirname, '..', '..', 'src', 'entities'),
        '@/features': path.resolve(__dirname, '..', '..', 'src', 'features'),
        '@/widgets': path.resolve(__dirname, '..', '..', 'src', 'widgets'),
        '@/pages': path.resolve(__dirname, '..', '..', 'src', 'pages'),
        '@/app': path.resolve(__dirname, '..', '..', 'src', 'app'),
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
};
