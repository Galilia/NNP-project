import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

export default {
    title: 'shared/ArticleDetailsSkeleton',
    component: ArticleDetailsSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsSkeleton>;

const Template: ComponentStory<typeof ArticleDetailsSkeleton> = (args) => (
    <ArticleDetailsSkeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
