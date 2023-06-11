import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/editableProfileCard/editableProfileCard',
    component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({})];
