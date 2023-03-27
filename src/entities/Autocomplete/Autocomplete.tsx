import {
    ChangeEvent,
    memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseIcon from 'shared/assets/icons/close-24-24.svg';
import SearchIcon from 'shared/assets/icons/search.svg';
import cls from './Autocomplete.module.scss';

interface AutocompleteProps {
    className?: string;
}

interface Data {
    id: number;
    name: string;
}

const getDataNames = async (query: string): Promise<Data[]> => {
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
    const [searchArr, setSearchArr] = useState<Data[]>([]);
    const triggerRef = useRef<HTMLInputElement>(null);

    const extractSearchTerms = (input: string): string[] => {
        const regex = /@\w+/g;
        return (input.match(regex) || []).map((term) => term.slice(1));
    };

    const loadData = async () => {
        const searchTerms = extractSearchTerms(query);
        const searchResults = await Promise.all(
            searchTerms.map(async (searchTerm) => {
                const data = await getDataNames(searchTerm);
                return data;
            }),
        );
        setSearchArr(searchResults.flat());
    };

    useEffect(() => {
        if (shouldLoadData) {
            loadData();
            setShouldLoadData(false);
        }
        /* eslint-disable */
    }, [query]);

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
        setShouldLoadData(true);
    };

    const handleTriggerClick = (item: Data) => {
        const searchTermToReplace = query.match(/@\w*$/)?.[0] || '';
        const newQuery = `${query.replace(searchTermToReplace, `@${item.name}`)} `;
        setQuery(newQuery);
        setSearchArr([]);
        setShouldLoadData(false);
        console.log('newQuery', newQuery);
        console.log('searchArr', searchArr);
        if (triggerRef.current) {
            triggerRef.current.focus();
        }
    };

    const handleInputClear = () => {
        setQuery('');
    };

    return (
        <div className={classNames(cls.Autocomplete, {}, [className])}>
            <div className={cls.searchBox}>
                <Icon Svg={SearchIcon} className={cls.searchIcon} />
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    ref={triggerRef}
                />
                {query && (
                    <Icon
                        Svg={CloseIcon}
                        className={cls.clearIcon}
                        onClick={handleInputClear}
                    />
                )}
            </div>

            <ul className={cls.dropdown}>
                {searchArr.map((item) => (
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
        </div>
    );
});
