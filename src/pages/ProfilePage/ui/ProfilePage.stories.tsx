import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/themeConst';

import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastname: 'Galperin',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastname: 'Galilia',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
            },
        },
    }),
];
