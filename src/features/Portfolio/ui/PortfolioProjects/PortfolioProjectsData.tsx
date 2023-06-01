import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import amdocs from '@/shared/assets/images/Amdocs.png';
import microsoft from '@/shared/assets/images/M365-2.png';
import portfolio from '@/shared/assets/images/portfolio.png';

export const PortfolioProjectsData = () => {
    const { t } = useTranslation('portfolio');

    return useMemo(
        () => [
            {
                img: amdocs,
                title: 'Catalog One',
                company: 'Amdocs',
                description: t('amdocs_description'),
                stack: 'React, Redux, JavaScript, Unit testing, Webpack, Jenkins, Jira, Nodejs',
                website:
                    'https://www.amdocs.com/sites/default/files/2021-07/amdocs-catalogONE-brochure.pdf',
            },
            {
                img: microsoft,
                title: 'Microsoft 365 Defender',
                company: 'Microsoft',
                description: t('microsoft_description'),
                stack: 'React, Redux, Angular 8, Typescript, JavaScript, Webpack, i18n, A11y tools',
                website:
                    // eslint-disable-next-line max-len
                    'https://www.microsoft.com/en-ww/security/business/siem-and-xdr/microsoft-defender-office-365?market=il',
            },
            {
                img: portfolio,
                title: 'Personal Project',
                description: t('personal_project_description'),
                stack:
                    'React, Typescript, Redux, SCSS, Webpack, Babel, Eslint,\n' +
                    'Storybook, CI/CD, FSD, i18n, Unit Testing, Cypress',
                github: 'https://github.com/Galilia/nnp-react-app',
            },
        ],
        [t],
    );
};
