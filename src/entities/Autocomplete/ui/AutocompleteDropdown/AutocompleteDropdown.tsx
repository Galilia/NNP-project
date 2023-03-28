import { LegacyRef, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AutocompleteSchema } from 'entities/Autocomplete/model/types/autocompleteSchema';
import cls from './AutocompleteDropdown.module.scss';

interface AutocompleteDropdownProps {
    className?: string;
    dropdownRef: LegacyRef<HTMLUListElement> | undefined,
    items: AutocompleteSchema[],
    handleTriggerClick: (item: AutocompleteSchema) => void;
}

export const AutocompleteDropdown = memo((props: AutocompleteDropdownProps) => {
    const {
        className, dropdownRef, items, handleTriggerClick,
    } = props;

    return (
        <ul className={classNames(cls.AutocompleteDropdown, {}, [className])} ref={dropdownRef}>
            {items.map((item: AutocompleteSchema) => (
                <li key={item.id}>
                    <button
                        type="button"
                        className={cls.dropdownButton}
                        onClick={() => handleTriggerClick(item)}
                    >
                        {item.name}
                    </button>
                </li>
            ))}
        </ul>
    );
});
