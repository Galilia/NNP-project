import {
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

interface Country {
    id: number;
    name: string;
}

const simulateTextInput = (text: string) => {
    // Simulate text input
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    input.value = text;
    input.dispatchEvent(new Event('input'));
    document.body.removeChild(input);
};

const getCountryNames = async (query: string): Promise<Country[]> => {
    const response = await fetch(`https://restcountries.com/v2/name/${query}`);
    const data = await response.json();

    return data.map((country: any) => ({
        id: country.numericCode,
        name: country.name,
    }));
};

export const Autocomplete = memo((props: AutocompleteProps) => {
    const { className } = props;
    const [query, setQuery] = useState('');
    const [countries, setCountries] = useState<Country[]>([]);
    const triggerRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const loadCountries = async () => {
            const queryMatch = query.match(/@(\w+)/);
            if (queryMatch) {
                const searchTerm = queryMatch[1];
                const countr = await getCountryNames(searchTerm);
                setCountries(countr);
            } else {
                setCountries([]);
            }
        };

        loadCountries();
    }, [query]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleTriggerClick = (country: Country) => {
        const newQuery = `${query.replace(/@\w+/, `@${country.name}`)} `;
        simulateTextInput(newQuery);
        setQuery(newQuery);
        setCountries([]);
        if (triggerRef.current) {
            triggerRef.current.blur();
        }
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
                    <Icon Svg={CloseIcon} className={cls.clearIcon} />)}
            </div>

            {countries.length > 0 && (
                <ul className={cls.dropdown}>
                    {countries.map((country) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                        <li key={country.id} onClick={() => handleTriggerClick(country)}>
                            {country.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});
