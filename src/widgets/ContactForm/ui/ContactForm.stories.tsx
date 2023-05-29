import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ContactForm } from './ContactForm';

export default {
    title: 'shared/ContactForm',
    component: ContactForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => (
    <ContactForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
