import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import {
    LoginFormWithCaret,
} from 'features/AuthByUsername/ui/LoginFormWithCaret/LoginFormWithCaret';
import { LoginForm } from '../LoginForm/LoginForm';

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
        {!withCaret ? <LoginForm /> : <LoginFormWithCaret />}
    </Modal>
);
