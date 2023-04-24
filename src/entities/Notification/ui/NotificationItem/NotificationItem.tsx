import { memo, useState } from 'react';
import { Notification } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
    // onRead?: (notificationId: string, isRead: boolean) => void;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    // const [isRead, setIsRead] = useState(item.isRead || false);

    // const handleCheckboxChange = (event) => {
    //     event.stopPropagation();
    //     const newIsRead = event.target.checked;
    //     setIsRead(newIsRead);
    //     onRead(item.id, newIsRead);
    // };

    // const handleCheckboxChange = () => {
    //     onRead?.(item.id, item.isRead);
    // };

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <div className={cls.cardContent}>
                <Text title={item?.title} text={item?.description} />
                <Text text={item?.date?.slice(0, 24)} />
            </div>
            <div className={cls.cardCheckbox}>
                <input
                    // checked={isRead}
                    // onChange={handleCheckboxChange}
                    type="checkbox"
                    id="checkbox1"
                    className={cls.checkboxInput}
                />
            </div>
        </Card>
    );

    if (item?.href) {
        return (
            <a className={cls.link} target="_blank" href={item?.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
