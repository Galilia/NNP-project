import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls['lds-ring'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
