import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Button/Button';
import { MenuDropdown as Menu } from './Menu';

export default {
    title: 'shared/Menu',
    component: Menu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'text1',
        },
        {
            content: 'text2',
        },
        {
            content: 'text3',
        },
    ],
};
