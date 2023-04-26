import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { articleData } from '../../mocks/data';

import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const List = Template.bind({});
List.args = {
    view: 'LIST',
    article: articleData,
};

export const Grid = Template.bind({});
Grid.args = {
    view: 'GRID',
    article: articleData,
};
