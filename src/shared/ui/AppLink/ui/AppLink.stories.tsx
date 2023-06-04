import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink } from './AppLink';
import { AppLinkTheme } from '../model/consts/consts';

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
