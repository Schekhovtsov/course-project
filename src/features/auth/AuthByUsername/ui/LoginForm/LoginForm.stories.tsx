import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    onSuccess: () => {},
};

Primary.decorators = [
    StoreDecorator({
        loginForm: { username: 'login', password: 'pass' },
    }),
];
