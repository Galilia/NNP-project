import React, { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import {
    LoginFormWithCaretAsync,
} from '../LoginFormWithCaret/LoginFormWithCaret.async';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    withCaret?: boolean; // with flag as addition defines to use firebase or dev server
}

export const LoginModal = ({
    className, isOpen, onClose, withCaret,
}: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            {!withCaret ? <LoginFormAsync onSuccess={onClose} /> : <LoginFormWithCaretAsync onSuccess={onClose} />}
        </Suspense>
    </Modal>
);
