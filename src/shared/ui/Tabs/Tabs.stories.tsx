import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            content: 'Tab 1',
            value: 'Tab 1',
        },
        {
            content: 'Tab 2',
            value: 'Tab 2',
        },
        {
            content: 'Tab 3',
            value: 'Tab 3',
        },
    ],
    value: 'Tab 2',
    onTabClick: action('onTabClick'),
};
Primary.decorators = [StoreDecorator({})];
