import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AutocompleteInput } from './AutocompleteInput';

export default {
    title: 'entities/Autocomplete/AutocompleteInput',
    component: AutocompleteInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AutocompleteInput>;

const Template: ComponentStory<typeof AutocompleteInput> = (args) => (
    <AutocompleteInput {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    query: 'Node JS',
};
