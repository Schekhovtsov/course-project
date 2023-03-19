import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import avatar from 'shared/assets/icons/tests/avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entity/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        firstName: 'John',
        lastName: 'Malkovich',
        city: 'New York',
        avatar,
    },
};
Primary.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};
WithError.decorators = [StoreDecorator({})];
