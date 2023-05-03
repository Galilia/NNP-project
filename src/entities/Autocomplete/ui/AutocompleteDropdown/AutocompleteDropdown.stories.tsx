import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AutocompleteDropdown } from './AutocompleteDropdown';

export default {
    title: 'entities/Autocomplete/AutocompleteDropdown',
    component: AutocompleteDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AutocompleteDropdown>;

const Template: ComponentStory<typeof AutocompleteDropdown> = (args) => (
    <AutocompleteDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    items: [
        {
            id: 1,
            name: 'NodeJS',
        },
        {
            id: 2,
            name: 'TS',
        },
    ],
};
