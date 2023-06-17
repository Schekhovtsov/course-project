import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'Hello world',
        user: {
            id: '1',
            username: 'Vasya',
        },
    },
};
Primary.decorators = [StoreDecorator({})];
