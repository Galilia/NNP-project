import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollIndex, scrollSaveActions } from '@/features/ScrollSave';

interface ArticleInfiniteListProps {
    className?: string;
    onLoadNextPart?: () => void;
}

const Header = () => <ArticlesPageFilters />;

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className, onLoadNextPart } = props;
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const scrollIndex = useSelector(getScrollIndex);
    const dispatch = useAppDispatch();

    if (error) {
        return <Text text={t('List load error')} />;
    }

    const handleScrollIndexClick = (index: number) => {
        dispatch(scrollSaveActions.setScrollIndex(index));
    };

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
            onLoadNextPart={onLoadNextPart}
            Header={Header}
            scrollIdx={scrollIndex}
            handleScrollIndexClick={handleScrollIndexClick}
        />
    );
});
