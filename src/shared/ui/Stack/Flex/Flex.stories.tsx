import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};
