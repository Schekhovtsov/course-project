import { Story } from '@storybook/react';
// eslint-disable-next-line feature-sliced-design/layers-hierarchy
import '@/app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => story();
