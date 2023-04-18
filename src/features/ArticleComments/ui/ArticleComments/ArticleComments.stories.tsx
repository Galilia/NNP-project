import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleComments } from './ArticleComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleComments',
    component: ArticleComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
