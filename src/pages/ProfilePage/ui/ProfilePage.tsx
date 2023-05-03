import { useParams } from 'react-router-dom';

import { ProfileRating } from '@/features/ProfileRating';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/widgets/EditableProfileCard';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Page data-testid="ProfilePage">
            <VStack gap="16" max>
                <ProfileRating profileId={id} />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
