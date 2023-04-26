import {
    ChangeEvent,
    KeyboardEventHandler,
    memo,
    ReactEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react';

import { $api } from '@/shared/api/api';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

import { AutocompleteSchema } from '../../model/types/autocompleteSchema';
import {
    AutocompleteDropdown,
} from '../../ui/AutocompleteDropdown/AutocompleteDropdown';
import { AutocompleteInput } from '../../ui/AutocompleteInput/AutocompleteInput';

import cls from './Autocomplete.module.scss';

interface AutocompleteProps {
    className?: string;
}

export const Autocomplete = memo((props: AutocompleteProps) => {
    const { className } = props;
    const [query, setQuery] = useState('');
    const [shouldLoadData, setShouldLoadData] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [searchArr, setSearchArr] = useState<AutocompleteSchema[]>([]);
    const triggerRef = useRef<HTMLTextAreaElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const [selectionStart, setSelectionStart] = useState(0);
    const [selectionEnd, setSelectionEnd] = useState(0);

    const textareaAutoResize = (element: HTMLTextAreaElement) => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };

    const extractSearchTerms = (input: string): string[] => {
        const regex = /<\w+/g;

        return (input.match(regex) || []).map((term) => term.slice(1));
    };

    const getData = async (query: string): Promise<AutocompleteSchema[]> => {
        const response = await $api.get(`https://restcountries.com/v2/name/${query}`);

        if (!Array.isArray(response.data)) {
            throw new Error('Unexpected response format');
        }

        return response.data.map((item: any) => ({
            id: item.name,
            name: item.name,
        }));
    };

    const loadData = async () => {
        const searchTerms = extractSearchTerms(query);
        if (searchTerms.length > 0) {
            setIsLoading(true);
            try {
                const searchResults = await Promise.all(
                    searchTerms.map(async (searchTerm) => {
                        const data = await getData(searchTerm);
                        return data;
                    }),
                );
                setSearchArr(searchResults.flat());
                setIsLoading(false);
            } catch (error: any) {
                setIsLoading(false);
                if (error.response && error.response.status === 404) {
                    console.error('Error 404: Page not found');
                } else {
                    console.error('Error loading data:', error);
                }
            }
        }
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setSearchArr([]);
        }
    };

    const debouncedFetchData = useDebounce(() => {
        setShouldLoadData(true);
    }, 500);

    useEffect(() => {
        if (shouldLoadData) {
            loadData();
            setShouldLoadData(false);
        }
        /* eslint-disable-next-line  */
    }, [debouncedFetchData]);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
        if (event.key === 'Backspace') {
            const openingBracketIndex = query.lastIndexOf('<', selectionStart - 1);
            const closingBracketIndex = query.indexOf('>', selectionEnd - 1);
            if (openingBracketIndex !== -1 && closingBracketIndex !== -1) {
                const newValue = query.substring(0, openingBracketIndex) + query.substring(closingBracketIndex + 1);

                setQuery(newValue);
                setSelectionStart(openingBracketIndex);
                setSelectionEnd(openingBracketIndex);
                event.preventDefault();
            }
        }
    };

    const handleSelectionChange: ReactEventHandler<HTMLTextAreaElement> = (event) => {
        const { selectionStart, selectionEnd } = event.currentTarget;
        setSelectionStart(selectionStart ?? 0);
        setSelectionEnd(selectionEnd ?? 0);
    };

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setQuery(value);
        debouncedFetchData(value);
        textareaAutoResize(event.target);
    };

    const handleTriggerClick = (item: AutocompleteSchema) => {
        const searchTermToReplace = query.match(/<\w*$/)?.[0] || '';
        const newQuery = `${query.replace(searchTermToReplace, `<${item.name}>`)} `;
        setQuery(newQuery);
        setSearchArr([]);
        setShouldLoadData(false);
        if (triggerRef.current) {
            triggerRef.current.focus();
        }
    };

    const handleInputClear = () => {
        setQuery('');

        if (triggerRef.current) {
            const textareaElement = triggerRef.current as HTMLTextAreaElement;
            textareaElement.style.height = 'auto';
        }
    };

    return (
        <div className={classNames(cls.Autocomplete, {}, [className])}>
            <AutocompleteInput
                query={query}
                handleInputChange={handleInputChange}
                handleKeyDown={handleKeyDown}
                handleSelectionChange={handleSelectionChange}
                triggerRef={triggerRef}
                handleInputClear={handleInputClear}
            />
            {searchArr.length > 0
                && (
                    <AutocompleteDropdown
                        dropdownRef={dropdownRef}
                        items={searchArr}
                        handleTriggerClick={handleTriggerClick}
                        isLoading={isLoading}
                    />
                )}
        </div>
    );
});
