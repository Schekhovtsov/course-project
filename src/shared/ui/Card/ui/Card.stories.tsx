/* eslint-disable i18next/no-literal-string */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from '../../Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text text="Просто текст" />,
};
