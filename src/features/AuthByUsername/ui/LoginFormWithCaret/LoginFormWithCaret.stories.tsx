import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginFormWithCaret from './LoginFormWithCaret';

export default {
    title: 'features/LoginFormWithCaret',
    component: LoginFormWithCaret,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginFormWithCaret>;

const Template: ComponentStory<typeof LoginFormWithCaret> = (args) => <LoginFormWithCaret {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'Error found' },
})];

export const WithLoading = Template.bind({});
WithLoading.args = {};
WithLoading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];

export const WithCaret = Template.bind({});
WithCaret.args = {
    withCaret: true,
};
WithCaret.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];
