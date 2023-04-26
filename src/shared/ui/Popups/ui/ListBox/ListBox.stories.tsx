import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 200 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const items = [
    { value: 'Option 1', content: 'Option 1' },
    { value: 'Option 2', content: 'Option 2' },
    { value: 'Option 3', content: 'Option 3', disabled: true },
    { value: 'Option 4', content: 'Option 4' },
];

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items,
    defaultValue: 'Option 1',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items,
    direction: 'top left',
    defaultValue: 'Option 1',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items,
    direction: 'top right',
    defaultValue: 'Option 1',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items,
    direction: 'bottom left',
    defaultValue: 'Option 1',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items,
    direction: 'bottom right',
    defaultValue: 'Option 1',
};
