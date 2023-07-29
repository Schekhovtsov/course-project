import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    // eslint-disable-next-line i18next/no-literal-string
    children: <div>Drawer, испольщующийся в мобильной версии сайта</div>,
    style: {
        position: 'absolute',
        bottom: '0',
        width: '95%',
        height: '70%',
    },
};
