import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    width: 400,
    height: 100,
};

export const Circle = Template.bind({});
Circle.args = {
    width: 300,
    height: 300,
    borderRadius: '50%',
};
