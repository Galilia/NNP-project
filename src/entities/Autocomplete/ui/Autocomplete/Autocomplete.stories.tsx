import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Autocomplete } from './Autocomplete';

export default {
    title: 'entities/Autocomplete',
    component: Autocomplete,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
