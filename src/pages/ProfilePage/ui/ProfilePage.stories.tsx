import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfilePage from './ProfilePage';

import avatar from '@/shared/assets/icons/tests/avatar.png';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'page/Profile',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Primary = Template.bind({});

Primary.decorators = [
    StoreDecorator({
        profile: {
            data: {
                firstName: 'John',
                lastName: 'Malkovich',
                city: 'New York',
                avatar,
            },
        },
    }),
];
