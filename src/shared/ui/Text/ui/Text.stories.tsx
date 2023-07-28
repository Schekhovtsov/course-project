import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Only title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Only text',
};

export const TitleAndText = Template.bind({});
TitleAndText.args = {
    title: 'Title',
    text: 'Text',
};
