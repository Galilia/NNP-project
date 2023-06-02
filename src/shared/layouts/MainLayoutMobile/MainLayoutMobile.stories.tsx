import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MainLayoutMobile } from './MainLayoutMobile';

export default {
    title: 'shared/MainLayoutMobile',
    component: MainLayoutMobile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainLayoutMobile>;

const Template: ComponentStory<typeof MainLayoutMobile> = (args) => (
    <MainLayoutMobile {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
