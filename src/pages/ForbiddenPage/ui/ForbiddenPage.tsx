import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="ForbiddenPage">
            {t('forbidden_page')}
        </Page>
    );
};

export default ForbiddenPage;
