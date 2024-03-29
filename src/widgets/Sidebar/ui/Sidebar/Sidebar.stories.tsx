import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const NotAuthorized = Template.bind({});
NotAuthorized.decorators = [StoreDecorator({})];

export const Authorized = Template.bind({});
Authorized.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];
