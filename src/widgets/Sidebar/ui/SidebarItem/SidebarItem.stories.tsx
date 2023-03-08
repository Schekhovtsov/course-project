import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import HomeIcon from 'shared/assets/icons/home.svg';
import { SidebarItem } from './SidebarItem';

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
