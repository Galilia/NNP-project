import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    notifications: [
        {
            id: '1',
            title: 'Notification 1',
            description: 'Like, please, and comment!',
        },
        {
            id: '2',
            title: 'Notification 2',
            description: 'Like, please, and comment!',
        },
        {
            id: '3',
            title: 'Notification 3',
            description: 'Like, please, and comment!',
        },
    ],
};

// TODO remove or return long pooling to component
export const WithMockData = Template.bind({});
WithMockData.args = {};
WithMockData.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'Like, please, and comment!',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'Like, please, and comment!',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'Like, please, and comment!',
                },
            ],
        },
    ],
};
