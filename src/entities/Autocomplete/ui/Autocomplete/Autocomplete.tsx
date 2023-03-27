import {
    ChangeEvent,
    KeyboardEventHandler,
    memo,
    ReactEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AutocompleteDropdown,
} from 'entities/Autocomplete/ui/AutocompleteDropdown/AutocompleteDropdown';
import { AutocompleteInput } from 'entities/Autocomplete/ui/AutocompleteInput/AutocompleteInput';
import { AutocompleteSchema } from '../../model/types/autocompleteSchema';
import cls from './Autocomplete.module.scss';

interface AutocompleteProps {
    className?: string;
}

const getDataNames = async (query: string): Promise<AutocompleteSchema[]> => {
    const response = await fetch(`https://restcountries.com/v2/name/${query}`);
    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error('Unexpected response format');
    }

    return data.map((item: any) => ({
        id: item.name,
        name: item.name,
    }));
};

export const Autocomplete = memo((props: AutocompleteProps) => {
    const { className } = props;
    const [query, setQuery] = useState('');
    const [shouldLoadData, setShouldLoadData] = useState(true);
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

    const loadData = async () => {
        const searchTerms = extractSearchTerms(query);
        if (searchTerms.length > 0) {
            const searchResults = await Promise.all(
                searchTerms.map(async (searchTerm) => {
                    const data = await getDataNames(searchTerm);
                    return data;
                }),
            );
            setSearchArr(searchResults.flat());
        }
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setSearchArr([]);
        }
    };

    useEffect(() => {
        if (shouldLoadData) {
            loadData();
            setShouldLoadData(false);
        }
        /* eslint-disable-next-line  */
    }, [query]);

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

    const handleInputChange = async (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setQuery(value);
        setShouldLoadData(true);
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
                        searchArr={searchArr}
                        handleTriggerClick={handleTriggerClick}
                    />
                )}
        </div>
    );
});
