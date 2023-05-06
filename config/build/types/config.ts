import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode'];

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
};

export type BuildEnv = {
    mode: BuildMode;
    port: number;
    analyze: boolean;
    apiUrl: string;
};

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    analyze: boolean;
    port: number;
    project: 'storybook' | 'frontend' | 'jest';
    apiUrl: string;
}
