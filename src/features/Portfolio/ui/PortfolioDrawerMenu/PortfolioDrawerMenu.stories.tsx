import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PortfolioDrawerMenu } from './PortfolioDrawerMenu';

export default {
    title: 'shared/PortfolioDrawerMenu',
    component: PortfolioDrawerMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PortfolioDrawerMenu>;

const Template: ComponentStory<typeof PortfolioDrawerMenu> = (args) => (
    <PortfolioDrawerMenu {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
