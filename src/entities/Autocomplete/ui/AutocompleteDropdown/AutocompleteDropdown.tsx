import { LegacyRef, memo } from 'react';
import { AutocompleteSchema } from '../../model/types/autocompleteSchema';
import cls from './AutocompleteDropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';

interface AutocompleteDropdownProps {
    className?: string;
    dropdownRef: LegacyRef<HTMLUListElement> | undefined,
    items: AutocompleteSchema[],
    handleTriggerClick: (item: AutocompleteSchema) => void;
    isLoading: boolean;
}

export const AutocompleteDropdown = memo((props: AutocompleteDropdownProps) => {
    const {
        className, dropdownRef, items, handleTriggerClick, isLoading,
    } = props;

    return (
        <ul className={classNames(cls.AutocompleteDropdown, {}, [className])} ref={dropdownRef}>
            {isLoading ? (
                <li>
                    <Loader />
                </li>
            ) : (
                items.map((item: AutocompleteSchema) => (
                    <li key={item.id}>
                        <button
                            type="button"
                            className={cls.dropdownButton}
                            onClick={() => handleTriggerClick(item)}
                        >
                            {item.name}
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
});
