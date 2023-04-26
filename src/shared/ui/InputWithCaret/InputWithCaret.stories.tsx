import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { InputWithCaret } from './InputWithCaret';

export default {
    title: 'shared/InputWithCaret',
    component: InputWithCaret,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof InputWithCaret>;

const Template: ComponentStory<typeof InputWithCaret> = (args) => <InputWithCaret {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};
