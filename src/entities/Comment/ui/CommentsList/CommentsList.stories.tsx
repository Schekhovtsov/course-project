import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentsList } from './CommentsList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => (
    <CommentsList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'Hello world',
            user: {
                id: '1',
                username: 'Vasya',
            },
        },
    ],
};
Primary.decorators = [StoreDecorator({})];
