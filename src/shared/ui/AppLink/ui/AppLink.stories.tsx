import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLinkTheme } from '../model/consts/consts';

import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
};
