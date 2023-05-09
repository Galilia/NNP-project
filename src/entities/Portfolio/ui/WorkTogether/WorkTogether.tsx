import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './WorkTogether.module.scss';

interface WorkTogetherProps {
    className?: string;
}

export const WorkTogether = ({ className }: WorkTogetherProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.WorkTogether, {}, [className])}>
            {/*       <div className="_sectionContent_ypsvq_8   _standard_ypsvq_27"><h2>Let's work together!</h2> */}
            {/*           <div className="section-contacts"> */}
            {/*               <div className="section-contact-links"><p>Liked my code? I’m currently open for remote work as */}
            {/*                   Frontend React Developer.</p> */}
            {/*                   <div className="button-container"><a href="Anastasia-Zhuravleva-CV-eng.pdf" target="_blank" */}
            {/*                                                        download="Anastasia-Zhuravleva-CV-eng.pdf"> */}
            {/*                       <button color="green" className="_button_ymap1_1 */}
            {/* _green_ymap1_18  ">CV ENG */}
            {/*                       </button> */}
            {/*                   </a><a href="Anastasia-Zhuravleva-CV-RUS.pdf" target="_blank" */}
            {/*                          download="Anastasia-Zhuravleva-CV-RUS.pdf"> */}
            {/*                       <button color="pink" className="_button_ymap1_1 */}
            {/* _pink_ymap1_23  ">CV RUS */}
            {/*                       </button> */}
            {/*                   </a></div> */}
            {/*                   <div className="_contacts_1zoq6_1"><a href="https://t.me/ana_zhuravleva" target="_blank"> */}
            {/*                       <div className="_iconCard_q4hma_1"> */}
            {/*                           <div className="_icon_q4hma_1"> */}
            {/*                               <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" */}
            {/*                                    viewBox="0 0 24 24" height="1em" width="1em" */}
            {/*                                    xmlns="http://www.w3.org/2000/svg"><title></title> */}
            {/*                                   <path */}
            {/*                                       d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path> */}
            {/*                               </svg> */}
            {/*                           </div> */}
            {/*                           <h3>telegram/ana_zhuravleva</h3></div> */}
            {/*                   </a><a href="mailto: work@anastasiazhuravleva.ru" target="_blank"> */}
            {/*                       <div className="_iconCard_q4hma_1"> */}
            {/*                           <div className="_icon_q4hma_1"> */}
            {/*                               <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" */}
            {/*                                    viewBox="0 0 24 24" height="1em" width="1em" */}
            {/*                                    xmlns="http://www.w3.org/2000/svg"><title></title> */}
            {/*                                   <path */}
            {/*                                       d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"></path> */}
            {/*                               </svg> */}
            {/*                           </div> */}
            {/*                           <h3>work@anastasiazhuravleva.ru</h3></div> */}
            {/*                   </a><a href="https://github.com/meri-maki" target="_blank"> */}
            {/*                       <div className="_iconCard_q4hma_1"> */}
            {/*                           <div className="_icon_q4hma_1"> */}
            {/*                               <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" */}
            {/*                                    viewBox="0 0 24 24" height="1em" width="1em" */}
            {/*                                    xmlns="http://www.w3.org/2000/svg"><title></title> */}
            {/*                                   <path */}
            {/*                                       d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path> */}
            {/*                               </svg> */}
            {/*                           </div> */}
            {/*                           <h3>github/meri-maki</h3></div> */}
            {/*                   </a><a href="https://www.linkedin.com/in/anazhuravleva/" target="_blank"> */}
            {/*                       <div className="_iconCard_q4hma_1"> */}
            {/*                           <div className="_icon_q4hma_1"> */}
            {/*                               <svg stroke="currentColor" fill="currentColor" stroke-width="0" */}
            {/*                                    viewBox="0 0 1024 1024" height="1em" width="1em" */}
            {/*                                    xmlns="http://www.w3.org/2000/svg"> */}
            {/*                                   <path */}
            {/*                                       d="M997.795 1002.43H789.769c-14.715 0-26.607-11.892-26.607-26.607V640.806c0-114.898-59.263-114.898-78.816-114.898-52.611 0-74.986 41.525-82.243 59.466-3.427 8.064-5.04 21.77-5.04 40.921v349.732c0 14.715-11.892 26.607-26.606 26.607H362.23c-7.055 0-13.909-2.822-18.948-7.86s-7.861-11.895-7.66-18.95c0-5.643 2.822-567.432 0-624.881-.403-7.257 2.217-14.312 7.257-19.553s11.893-8.265 19.35-8.265h208.228c14.714 0 26.607 11.892 26.607 26.607v15.723c35.074-31.244 85.669-57.046 161.058-57.046 166.702 0 266.28 115.3 266.28 308.409v359.005c0 14.715-11.893 26.607-26.607 26.607zm-181.418-53.214l155.012-.004V616.815c0-162.268-77.606-255.193-213.065-255.193-90.507 0-134.45 45.153-162.066 86.476-3.225 10.885-13.506 18.949-25.6 18.949h-1.41c-9.677 0-18.546-5.242-23.181-13.707-3.628-6.653-4.435-14.313-2.016-21.368v-55.835H389.443c1.411 111.068 0 470.477-.403 572.877h154.809V626.09c0-26.809 2.822-46.16 8.869-60.875 23.383-57.852 72.566-92.724 131.427-92.724 83.855 0 132.03 61.28 132.03 168.113v308.611h.204zm-569.246 53.21H38.904c-14.715 0-26.607-11.892-26.607-26.607V349.73c0-14.715 11.892-26.608 26.607-26.608h208.227c14.715 0 26.607 11.893 26.607 26.607V975.82c0 14.715-11.892 26.608-26.607 26.608zM65.513 949.213h155.01V376.336H65.514v572.876zm77.605-658.344l-1.412-.001c-82.041 0-141.707-56.844-141.707-135.055 0-78.009 60.674-134.854 144.529-134.854 82.444 0 141.305 55.231 142.918 134.249 0 78.816-60.674 135.66-144.328 135.66zm1.41-216.492c-54.627 0-91.313 32.857-91.313 81.639 0 47.974 36.284 81.637 88.492 81.637h1.41c54.426 0 91.112-32.857 91.112-81.638-1.008-49.386-36.283-81.638-89.701-81.638z"></path> */}
            {/*                               </svg> */}
            {/*                           </div> */}
            {/*                           <h3>linkedin.com/anazhuravleva</h3></div> */}
            {/*                   </a><a href="https://mozhaisk.hh.ru/resume/23bfa3a6ff0825d70a0039ed1f304a746c6557" */}
            {/*                          target="_blank"> */}
            {/*                       <div className="_iconCard_q4hma_1"> */}
            {/*                           <div className="_icon_q4hma_1"> */}
            {/*                               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" */}
            {/*                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> */}
            {/*                                   <path */}
            {/*                                       d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"></path> */}
            {/*                                   <path */}
            {/*                                       d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"></path> */}
            {/*                               </svg> */}
            {/*                           </div> */}
            {/*                           <h3>HeadHunter.ru/anazhuravleva</h3></div> */}
            {/*                   </a></div> */}
            {/*               </div> */}
            {/*               <div className="_contactFormContainer_umpot_8"> */}
            {/*                   <form className="_contactForm_umpot_1 _contactFormDark_umpot_51"><label>Name</label><input */}
            {/*                       type="text" name="user_name" placeholder="Your Name" required="" */}
            {/*                       value=""><label>Email</label><input type="email" name="user_email" */}
            {/*                                                           placeholder="YourName@mail.com" required="" */}
            {/*                                                           value=""><label>Message</label><textarea */}
            {/*                       className="_contactFormArea_umpot_43" name="message" rows="7" */}
            {/*                       placeholder="Write something nice :)" required=""></textarea> */}
            {/*                       <button type="submit" value="Send" className="_button_ymap1_1 */}
            {/* _green_ymap1_18 _submit_ymap1_44 ">Submit */}
            {/*                       </button></form> */}
            {/*               </div> */}
            {/*           </div> */}
            {/*       </div> */}
        </div>
    );
};
