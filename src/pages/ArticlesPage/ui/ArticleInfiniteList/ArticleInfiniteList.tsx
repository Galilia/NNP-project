import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

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

    if (error) {
        return <Text text={t('List load error')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
            onLoadNextPart={onLoadNextPart}
            Header={Header}
        />
    );
});
