import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlesListPage from './ArticlesListPage';

export default {
    title: 'shared/ArticlesListPage',
    component: ArticlesListPage,
} as ComponentMeta<typeof ArticlesListPage>;

const Template: ComponentStory<typeof ArticlesListPage> = (args) => (
    <ArticlesListPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
