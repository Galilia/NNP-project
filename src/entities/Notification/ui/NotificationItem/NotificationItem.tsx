import React, { memo } from 'react';

import CloseIcon from '@/shared/assets/icons/close-window-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';

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
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <div className={cls.cardContent}>
                <Text title={item?.title} text={item?.description} />
                <Text text={item?.date?.slice(0, 24)} />
            </div>
            <Button
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.L}
                className={cls.clearBtn}
                onClick={handleCheckboxChange}
            >
                <Icon Svg={CloseIcon} className={cls.checkboxIcon} />
            </Button>
        </Card>
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
