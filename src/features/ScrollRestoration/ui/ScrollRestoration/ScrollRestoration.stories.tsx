import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScrollRestoration } from './ScrollRestoration';

export default {
    title: 'shared/ScrollRestoration',
    component: ScrollRestoration,
} as ComponentMeta<typeof ScrollRestoration>;

const Template: ComponentStory<typeof ScrollRestoration> = (args) => (
    <ScrollRestoration {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
