import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    item: {
        id: '1',
        userId: '1',
        title: 'Title',
        description: 'Description',
    },
};
