import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'entity/Comment/CommentCard',
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
