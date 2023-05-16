import { FC, memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'secondary' | 'red';

interface AppLinkProps extends LinkProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The theme of the app link.
     */
    variant?: AppLinkVariant;
    /**
     * The content to be displayed as the link text.
     */
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
