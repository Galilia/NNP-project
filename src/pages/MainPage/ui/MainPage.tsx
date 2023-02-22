import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [val, setVal] = useState('');

    const onChange = (value: string) => {
        setVal(value);
    };

    return (
        <div>
            {t('main_page')}
        </div>
    );
};

export default MainPage;
