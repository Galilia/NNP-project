import { memo, ReactNode, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Card, CardTheme } from '../Card/Card';

import cls from './Tabs.module.scss';

export interface TabItem {
    /**
     * The value that identifies the tab.
     */
    value: string;
    /**
     * The content to be displayed when this tab is active.
     */
    content: ReactNode;
}

interface TabsProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * An array of `TabItem` objects that defines the tabs.
     */
    tabs: TabItem[];
    /**
     * The value of the currently active tab.
     */
    value: string;
    /**
     * Function to handle the clicking of a tab. It receives the `TabItem` of the clicked tab.
     */
    onTabClick: (tab: TabItem) => void;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
