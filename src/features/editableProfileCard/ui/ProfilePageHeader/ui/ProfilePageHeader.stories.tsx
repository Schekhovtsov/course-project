import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfilePageHeader } from './ProfilePageHeader';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'feature/editableProfileCard/ProfilePageHeader',
    component: ProfilePageHeader,
} as ComponentMeta<typeof ProfilePageHeader>;

const Template: ComponentStory<typeof ProfilePageHeader> = (args) => (
    <ProfilePageHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
