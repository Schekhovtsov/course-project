/* eslint-disable i18next/no-literal-string */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../../Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    trigger: <Button>Open dropdown</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
