import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode'];

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
    src: string;
};

export type BuildEnv = {
    mode: BuildMode;
    port: number;
    analyze: boolean;
};

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    analyze: boolean;
    port: number;
    project: 'storybook' | 'frontend' | 'jest',
}
