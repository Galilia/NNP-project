import { useParams } from 'react-router-dom';
import {
    EditableProfileCard,
} from '@/widgets/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { ProfileRating } from '@/features/ProfileRating';

const ProfilePage = () => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return null;
    }

    return (
        <Page>
            <VStack gap="16" max>
                <ProfileRating profileId={id} />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
