import { useTranslation } from 'react-i18next';

import GITHUB from '@/shared/assets/icons/portfolio/links/github.svg';
import LINKEDIN from '@/shared/assets/icons/portfolio/links/linkedin.svg';
import EMAIL from '@/shared/assets/icons/portfolio/links/mail.svg';
import TG from '@/shared/assets/icons/portfolio/links/tg.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';

import cls from './PortfolioWorkTogether.module.scss';

const FILL_COLOR_RED = '#c85454';

const linkInfoData = [
    {
        icon: TG,
        title: 'TG',
        color: FILL_COLOR_RED,
        href: 'https://t.me/sdirbiz',
    },
    {
        icon: EMAIL,
        title: 'EMAIL',
        color: FILL_COLOR_RED,
        href: 'mailto:iliagalperin@gmail.com',
    },
    {
        icon: GITHUB,
        title: 'GITHUB',
        color: FILL_COLOR_RED,
        href: 'https://github.com/galilia',
    },
    {
        icon: LINKEDIN,
        title: 'LINKEDIN',
        color: FILL_COLOR_RED,
        href: 'https://www.linkedin.com/in/ilia-galperin-24454882/',
    },
];

interface WorkTogetherProps {
    className?: string;
}

// TODO PortfolioWorkTogether and it's content are in development and redesign
export const PortfolioWorkTogether = ({ className }: WorkTogetherProps) => {
    const { t } = useTranslation('main');

    return (
        <div
            id="contactMe"
            className={classNames(cls.WorkTogether, {}, [className])}
        >
            <h2>{t('lets_work_together')}</h2>
            <div className={cls.sectionContacts}>
                <div className={cls.sectionContactLinks}>
                    <p>{t('open_for_work')}</p>
                    <div className={cls.buttonContainer}>
                        <a
                            href="../../../../shared/assets/pdf/Ilia_Galperin_FullStack_Developer_CV.pdf"
                            target="_blank"
                            download="Ilia_Galperin_FullStack_Developer_CV.pdf"
                            className={cls.sectionHref}
                        >
                            <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                                {t('download_cv')}
                            </Button>
                        </a>
                    </div>
                    <div className={cls.linksWrapper}>
                        {linkInfoData.map((item, index) => (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className={cls.sectionHref}
                                key={index}
                            >
                                <div className={cls.skillsItemWrapper}>
                                    <div className={cls.icon}>
                                        <Icon
                                            Svg={item.icon}
                                            className={cls.icon}
                                            style={{ fill: item.color }}
                                        />
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={cls.formWrapper}>
                    <form className={cls.workTogetherForm}>
                        <label
                            htmlFor="username"
                            className={cls.workTogetherFormLabel}
                        >
                            {t('work_together_name')}
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Your Name"
                            required
                            value=""
                            className={cls.workTogetherFormInput}
                        />
                        <label
                            htmlFor="useremail"
                            className={cls.workTogetherFormLabel}
                        >
                            {t('work_together_email')}
                        </label>
                        <input
                            type="email"
                            name="useremail"
                            placeholder="YourName@gmail.com"
                            required
                            className={cls.workTogetherFormInput}
                        />
                        <label
                            htmlFor="message"
                            className={cls.workTogetherFormLabel}
                        >
                            {t('work_together_message')}
                        </label>
                        <textarea
                            name="message"
                            rows={7}
                            placeholder="Write something nice :)"
                            required
                            className={cls.workTogetherFormInput}
                        />
                        <Button type="submit">{t('submit')}</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
