import React, { memo, useCallback, useState } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';

import { NavbarDeprecated } from '../NavbarDeprecated/NavbarDeprecated';
import { NavbarRedesigned } from '../NavbarRedesigned/NavbarRedesigned';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <NavbarRedesigned
                    onShowModal={onShowModal}
                    onCloseModal={onCloseModal}
                    isAuthModal={isAuthModal}
                />
            }
            off={
                <NavbarDeprecated
                    onShowModal={onShowModal}
                    onCloseModal={onCloseModal}
                    isAuthModal={isAuthModal}
                />
            }
        />
    );
});
