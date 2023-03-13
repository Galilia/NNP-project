import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    profileReducer,
    fetchProfileData, getProfileValidateErrors, ValidateProfileError,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from 'widgets/EditableProfileCard/EditableProfileCard';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const validateErrors = useSelector(getProfileValidateErrors);
    const { t } = useTranslation('profile');

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('server_error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect_country'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('invalid_user_data'),
        [ValidateProfileError.NO_DATA]: t('no_data'),
        [ValidateProfileError.INCORRECT_AGE]: t('invalid_age'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <EditableProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
