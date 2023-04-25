import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {/* eslint-disable i18next/no-literal-string */}
            <h1>List of developed entities and features</h1>
            <h2>Entities:</h2>
            <ul>
                <li>Autocomplete</li>
                <li>Comment</li>
                <li>Counter</li>
                <li>Currency</li>
                <li>Country</li>
                <li>Profile</li>
                <li>User</li>
                <li>TagsInput</li>
            </ul>

            <h2 className={cls.header}>Features:</h2>
            <ul>
                <li>addCommentForm</li>
                <li>AuthByUsername</li>
                <li>ScrollSave</li>
                <li>LangSwitcher</li>
            </ul>
        </Page>
    );
};

export default MainPage;
