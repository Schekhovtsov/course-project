import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    variant: 'secondary',
};

export const Text = Template.bind({});
Text.args = {
    children: 'Text',
    variant: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    variant: 'primary',
    disabled: true,
};
