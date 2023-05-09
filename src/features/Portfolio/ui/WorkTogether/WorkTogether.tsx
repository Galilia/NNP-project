import { useTranslation } from 'react-i18next';

import GITHUB from '@/shared/assets/icons/portfolio/links/github.svg';
import LINKEDIN from '@/shared/assets/icons/portfolio/links/linkedin.svg';
import EMAIL from '@/shared/assets/icons/portfolio/links/mail.svg';
import TG from '@/shared/assets/icons/portfolio/links/tg.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import cls from './WorkTogether.module.scss';

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

export const WorkTogether = ({ className }: WorkTogetherProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(cls.WorkTogether, {}, [className])}>
            <h2>{t('lets_work_together')}</h2>
            <div className={cls.sectionContacts}>
                <div className={cls.sectionContactLinks}>
                    <p>{t('open_for_work')}</p>
                    <div className="button-container">
                        <a
                            href="../../../../shared/assets/pdf/Ilia_Galperin_FullStack_Developer_CV.pdf"
                            target="_blank"
                            download="Ilia_Galperin_FullStack_Developer_CV.pdf"
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
                            >
                                <div
                                    className={cls.skillsItemWrapper}
                                    key={index}
                                >
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
                        <label htmlFor="username">
                            {t('work_together_name')}
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Your Name"
                            required
                            value=""
                        />
                        <label htmlFor="useremail">
                            {t('work_together_email')}
                        </label>
                        <input
                            type="email"
                            name="useremail"
                            placeholder="YourName@gmail.com"
                            required
                        />
                        <label htmlFor="message">
                            {t('work_together_message')}
                        </label>
                        <textarea
                            className="_contactFormArea_umpot_43"
                            name="message"
                            rows={7}
                            placeholder="Write something nice :)"
                            required
                        />
                        <Button type="submit">{t('submit')}</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
