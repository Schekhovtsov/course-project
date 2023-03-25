import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from './Article';

export default {
    title: 'shared/Article',
    component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
    <Article {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
