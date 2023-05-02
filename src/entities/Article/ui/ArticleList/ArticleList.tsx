import {
    FC, HTMLAttributeAnchorTarget, memo, useEffect, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
    virtualized?: boolean;
    Header?: () => JSX.Element;
    scrollIdx?: number;
    handleScrollIndexClick?: (index: number) => void;
}

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton key={index} view="LIST" className={cls.card} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        view = 'GRID',
        onLoadNextPart,
        virtualized = true,
        Header,
        scrollIdx,
        handleScrollIndexClick,
    } = props;
    const { t } = useTranslation();
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === 'GRID') {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(scrollIdx as number);
                }
            }, 100);
        }

        return () => clearTimeout(timeoutId);
    }, [scrollIdx, view]);

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            handleButtonClick={handleScrollIndexClick ? () => handleScrollIndexClick(index) : undefined}
        />
    );

    if (!virtualized) {
        return (
            <HStack wrap="wrap" gap="16">
                {articles.length > 0
                    ? articles.map((article, index) => renderArticle(index, article))
                    : null}
                {isLoading && getSkeletons()}
            </HStack>
        );
    }

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons()}
                </div>
            );
        }
        return null;
    });

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('No articles found')} />
            </div>
        );
    }

    // eslint-disable-next-line react/no-unstable-nested-components
    const ItemContainerComp: FC<{ height: number; width: number; index: number }> = ({ height, width, index }) => (
        <div className={cls.ItemContainer}>
            <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
        </div>
    );

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            data-testid="ArticleList"
        >
            { view === 'LIST' ? (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={scrollIdx}
                    components={{
                        Header,
                        Footer,
                    }}
                />
            ) : (
                <VirtuosoGrid
                    ref={virtuosoGridRef}
                    totalCount={articles.length}
                    components={{
                        Header,
                        ScrollSeekPlaceholder: ItemContainerComp,
                    }}
                    endReached={onLoadNextPart}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={cls.itemsWrapper}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 30,
                    }}
                />
            )}
        </div>
    );
});
