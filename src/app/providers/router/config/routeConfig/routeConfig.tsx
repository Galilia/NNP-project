import { RouteProps } from "react-router-dom";
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
    MAIN = '/',
    ABOUT = 'about'
}

export const routeConfig: Array<RouteProps> = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage />
    }
]