import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';

import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'Description',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'Description',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'Description',
                },
            ],
        },
    ],
};
