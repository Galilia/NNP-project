import {
    EditableProfileCard,
} from 'widgets/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <Text text={t('Profile not found')} />;
    }

    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
