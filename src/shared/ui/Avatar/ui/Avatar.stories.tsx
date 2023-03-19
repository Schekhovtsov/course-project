import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImg from 'shared/assets/icons/tests/avatar.png';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    size: 24,
};

export const Big = Template.bind({});
Big.args = {
    src: AvatarImg,
    size: 64,
};
