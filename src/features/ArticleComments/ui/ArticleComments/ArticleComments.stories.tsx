import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleComments } from './ArticleComments';

export default {
    title: 'shared/ArticleComments',
    component: ArticleComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
