import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentsList } from './CommentsList';

export default {
    title: 'entity/Comment/CommentsList',
    component: CommentsList,
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => (
    <CommentsList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
