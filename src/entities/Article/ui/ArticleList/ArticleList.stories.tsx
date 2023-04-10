import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articleData } from '../../mocks/data';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const LoadingList = Template.bind({});
LoadingList.args = {
    articles: [],
    isLoading: true,
    view: 'LIST',
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
    articles: [],
    isLoading: true,
    view: 'GRID',
};

export const ListGrid = Template.bind({});
ListGrid.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...articleData,
            id: String(index),
        })),
    isLoading: false,
    view: 'GRID',
};

export const List = Template.bind({});
List.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...articleData,
            id: String(index),
        })),
    isLoading: false,
    view: 'LIST',
};
