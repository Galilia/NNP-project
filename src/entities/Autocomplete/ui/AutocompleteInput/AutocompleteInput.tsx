import { ChangeEvent, KeyboardEventHandler, LegacyRef, memo } from 'react';

import CloseIcon from '@/shared/assets/icons/close-24-24.svg';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';

import cls from './AutocompleteInput.module.scss';

interface AutocompleteInputProps {
    className?: string;
    query: string;
    handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement>;
    handleSelectionChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    triggerRef: LegacyRef<HTMLTextAreaElement> | undefined;
    handleInputClear: () => void;
}

export const AutocompleteInput = memo((props: AutocompleteInputProps) => {
    const {
        className,
        query,
        handleInputChange,
        handleKeyDown,
        handleSelectionChange,
        triggerRef,
        handleInputClear,
    } = props;

    return (
        <div className={classNames(cls.AutocompleteInput, {}, [className])}>
            <Icon Svg={SearchIcon} className={cls.searchIcon} />
            <textarea
                className={cls.textarea}
                placeholder="Search for country pressing <"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onSelect={handleSelectionChange}
                ref={triggerRef}
                rows={1}
            />
            {query && (
                <Icon
                    Svg={CloseIcon}
                    className={cls.clearIcon}
                    onClick={handleInputClear}
                />
            )}
        </div>
    );
});
