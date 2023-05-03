import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsCommentsReducer } from '@/features/ArticleComments';

import { ArticleDetailsPageSchema } from '../types';

import { articleDetailsRecommendReducer } from './articleDetailsRecommendSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsRecommendReducer,
    });
