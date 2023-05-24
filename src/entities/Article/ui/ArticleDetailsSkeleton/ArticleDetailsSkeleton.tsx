import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleDetailsSkeleton.module.scss';

export const ArticleDetailsSkeleton = memo(() => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack gap="16" max>
                    <SkeletonRedesigned
                        className={cls.avatar}
                        width={200}
                        height={200}
                        border="50%"
                    />
                    <SkeletonRedesigned
                        className={cls.title}
                        width={300}
                        height={32}
                    />
                    <SkeletonRedesigned
                        className={cls.skeleton}
                        width={600}
                        height={24}
                    />
                    <SkeletonRedesigned
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                    <SkeletonRedesigned
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                </VStack>
            }
            off={
                <VStack gap="16" max>
                    <SkeletonDeprecated
                        className={cls.avatar}
                        width={200}
                        height={200}
                        border="50%"
                    />
                    <SkeletonDeprecated
                        className={cls.title}
                        width={300}
                        height={32}
                    />
                    <SkeletonDeprecated
                        className={cls.skeleton}
                        width={600}
                        height={24}
                    />
                    <SkeletonDeprecated
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                    <SkeletonDeprecated
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                </VStack>
            }
        />
    );
});
