import React, { ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import { Overlay } from '../../redesigned/Overlay/Overlay';
import { Portal } from '../../redesigned/Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The content to be displayed within the modal.
     */
    children?: ReactNode;
    /**
     * A boolean that, when true, makes the modal visible.
     */
    isOpen?: boolean;
    /**
     * Function to handle the closing of the modal.
     */
    onClose?: () => void;
    /**
     * A boolean that, when true, renders the modal content only when the modal is open.
     */
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { theme } = useTheme();
    const { isClosing, close, isMounted } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
