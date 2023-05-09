import { useTranslation } from 'react-i18next';

import React from '@/shared/assets/icons/portfolio/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './LatestProjects.module.scss';

interface LatestProjectsProps {
    className?: string;
}

export const LatestProjects = ({ className }: LatestProjectsProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(cls.LatestProjects, {}, [className])}>
            <div className="_sectionContent_ypsvq_8_standard_ypsvq_27">
                <h2>Latest projects</h2>
                <div className="_projectCard_nm2fj_1">
                    <div className="_imageContainer_nm2fj_18">
                        <img
                            src="/assets/toon-dark.154c98cd.webp"
                            alt="App view on different devices"
                        />
                    </div>
                    <div className="_descriptionContainer_nm2fj_27">
                        <h3>ToON.ORG website [IN DEVELOPMENT]</h3>
                        <p>
                            Web3.0 responsive website build with Webpack5. The
                            project was successfully presented on Crypto Expo
                            Dubai 2023.
                            <br />
                            <br />
                            <span className="_descriptionStack_nm2fj_40">
                                STACK
                            </span>
                            : HTML, Javascript, SCSS, Webpack, Gulp, Web3,
                            Locomotive Scroll, jQuery
                        </p>
                        <div className="_descriptionButtonContainer_nm2fj_33" />
                    </div>
                </div>
                <div className="_projectCard_nm2fj_1">
                    <div className="_imageContainer_nm2fj_18">
                        <img
                            src="/assets/mern-dark.6d95d72a.webp"
                            alt="Social app view on different devices"
                        />
                    </div>
                    <div className="_descriptionContainer_nm2fj_27">
                        <h3>MERN Stack Social App [LIMITED FUNCTIONALITY]</h3>
                        <p>
                            Responsive MERN Stack Social network app with
                            authorization and state management using React,
                            MongoDB and Meterial UI
                            <br />
                            <br />
                            <span className="_descriptionStack_nm2fj_40">
                                STACK
                            </span>
                            : MERN: NodeJS, MongoDB, Mongoose, JsonWebToken,
                            Multer, Yup, React, Redux Toolkit, React Persist,
                            React Router, Formik, React Dropzone, MUI
                        </p>
                        <div className="_descriptionButtonContainer_nm2fj_33">
                            <a
                                href="https://github.com/meri-maki/MERN-social-FRONT"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="_button_ymap1_1_green_ymap1_18  ">
                                    Show Git Repo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="_projectCard_nm2fj_1">
                    <div className="_imageContainer_nm2fj_18">
                        <img
                            src="/assets/portfolio-dark.470d7297.webp"
                            alt="Portfolio website view on different devices"
                        />
                    </div>
                    <div className="_descriptionContainer_nm2fj_27">
                        <h3>Personal Portfolio Website</h3>
                        <p>
                            React based portfolio website made with Vite build
                            tool. Includes Lazy loading, light/dark theme
                            switcher, internationalization and additional
                            dependencies such as react-scroll, react-icons, and
                            integration with EmailJs. App architecture is based
                            on Feature-Sliced Design
                            <br />
                            <br />
                            <span className="_descriptionStack_nm2fj_40">
                                STACK
                            </span>
                            : React, Javascript, CSS modules, Vite, FSD, i18n
                        </p>
                        <div className="_descriptionButtonContainer_nm2fj_33">
                            <a
                                href="https://ana-zhuravleva-portfolio.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button
                                    color="pink"
                                    className="_button_ymap1_1_pink_ymap1_23  "
                                >
                                    Visit Website
                                </button>
                            </a>
                            <a
                                href="https://github.com/meri-maki/portfolio"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="_button_ymap1_1_green_ymap1_18  ">
                                    Show Git Repo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
