import { ArticleDetailsCommentsSchema } from '@/features/ArticleComments';

import { ArticleDetailsRecommendSchema } from './ArticleDetailsRecommendSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema,
    recommendations: ArticleDetailsRecommendSchema,
}
