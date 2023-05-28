import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { HeaderDescription } from './HeaderDescription';

export default {
    title: 'shared/HeaderDescription',
    component: HeaderDescription,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderDescription>;

const Template: ComponentStory<typeof HeaderDescription> = (args) => (
    <HeaderDescription {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    header: 'Title lorem ipsun',
    description: 'Description Description',
};
