import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import {
    LoginFormWithCaretAsync,
} from '../LoginFormWithCaret/LoginFormWithCaret.async';

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
            {!withCaret ? <LoginFormAsync /> : <LoginFormWithCaretAsync />}
        </Suspense>
    </Modal>
);
