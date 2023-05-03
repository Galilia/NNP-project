import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import CommentForm from './CommentForm';

export default {
    title: 'entities/CommentForm',
    component: CommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => (
    <CommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
Normal.decorators = [StoreDecorator({})];
