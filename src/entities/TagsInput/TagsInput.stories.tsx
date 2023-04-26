import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TagsInput } from './TagsInput';

export default {
    title: 'entities/TagsInput',
    component: TagsInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TagsInput>;

const Template: ComponentStory<typeof TagsInput> = (args) => <TagsInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
