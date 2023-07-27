import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <AddCommentForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
