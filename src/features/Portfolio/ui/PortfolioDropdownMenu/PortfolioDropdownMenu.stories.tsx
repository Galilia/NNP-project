import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PortfolioDropdownMenu } from './PortfolioDropdownMenu';

export default {
    title: 'shared/PortfolioDropdownMenu',
    component: PortfolioDropdownMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PortfolioDropdownMenu>;

const Template: ComponentStory<typeof PortfolioDropdownMenu> = (args) => (
    <PortfolioDropdownMenu {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
