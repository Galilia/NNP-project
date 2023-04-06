import {
    HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'shared/const/localstorage';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
}

const getSkeletons = (view: ArticleView) => new Array(view === 'GRID' ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        view = 'GRID',
        onLoadNextPart,
    } = props;
    const { t } = useTranslation();
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 1;
        setSelectedArticleId(+paged);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === 'GRID') {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }

        return () => clearTimeout(timeoutId);
    }, [selectedArticleId, view]);

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            index={index}
        />
    );

    const footer = () => {
        if (isLoading) {
            return <div>{getSkeletons(view)}</div>;
        }
        return null;
    };

    const header = () => <ArticlesPageFilters className={cls.ArticlesPageFilters} />;

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('No articles found')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            { view === 'LIST' ? (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Header: header,
                        Footer: footer,
                    }}
                />
            ) : (
                <VirtuosoGrid
                    ref={virtuosoGridRef}
                    totalCount={articles.length}
                    components={{
                        Header: header,
                        Footer: footer,
                    }}
                    endReached={onLoadNextPart}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={cls.grid}
                />
            )}
        </div>
    );
});
