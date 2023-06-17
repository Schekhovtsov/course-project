import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarItem } from './SidebarItem';

import HomeIcon from '@/shared/assets/icons/home.svg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widget/SidebarItem',
    component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => (
    <SidebarItem {...args} />
);

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({})];
Primary.args = {
    item: {
        path: '',
        text: 'Home',
        Icon: HomeIcon,
    },
};
