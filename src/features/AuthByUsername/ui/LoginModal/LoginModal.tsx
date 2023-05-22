import React, { Suspense } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal } from '@/shared/ui/redesigned/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { LoginFormWithCaretAsync } from '../LoginFormWithCaret/LoginFormWithCaret.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    withCaret?: boolean; // with flag as addition defines to use firebase or dev server
}

export const LoginModal = ({
    className,
    isOpen,
    onClose,
    withCaret,
}: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            {!withCaret ? (
                <LoginFormAsync onSuccess={onClose} />
            ) : (
                <LoginFormWithCaretAsync onSuccess={onClose} />
            )}
        </Suspense>
    </Modal>
);
