import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PortfolioScrollButtons } from './PortfolioScrollButtons';

export default {
    title: 'shared/PortfolioScrollButtons',
    component: PortfolioScrollButtons,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PortfolioScrollButtons>;

const Template: ComponentStory<typeof PortfolioScrollButtons> = (args) => (
    <PortfolioScrollButtons {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
