import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './Navbar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widget/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NotAuthorized = Template.bind({});
NotAuthorized.args = {
    portalProps: {
        portalElement: 'root',
    },
};
NotAuthorized.decorators = [StoreDecorator({})];

export const Authorized = Template.bind({});
Authorized.args = {
    portalProps: {
        portalElement: 'root',
    },
};
Authorized.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];
