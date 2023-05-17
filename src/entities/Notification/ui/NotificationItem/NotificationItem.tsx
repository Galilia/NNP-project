import React, { memo } from 'react';

import CloseIcon from '@/shared/assets/icons/close-window-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';

import { Notification } from '../../model/types/notifications';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
    onRead: (notification: string) => void;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item, onRead } = props;

    const handleCheckboxChange = () => {
        if (!item.isRead) {
            onRead?.(item.id);
        }
    };

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <div className={cls.cardContent}>
                        <Text title={item?.title} text={item?.description} />
                        <Text text={item?.date?.slice(0, 24)} />
                    </div>
                    <Icon
                        Svg={CloseIcon}
                        clickable
                        className={cls.checkboxIcon}
                        onClick={handleCheckboxChange}
                    />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <div className={cls.cardContent}>
                        <TextDeprecated
                            title={item?.title}
                            text={item?.description}
                        />
                        <TextDeprecated text={item?.date?.slice(0, 24)} />
                    </div>
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR}
                        size={ButtonSize.L}
                        className={cls.clearBtn}
                        onClick={handleCheckboxChange}
                    >
                        <IconDeprecated
                            Svg={CloseIcon}
                            className={cls.checkboxIcon}
                        />
                    </ButtonDeprecated>
                </CardDeprecated>
            }
        />
    );

    if (item?.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item?.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
