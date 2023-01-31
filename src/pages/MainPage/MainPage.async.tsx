import { resolve } from 'path';
import { lazy } from 'react';
import MainPage from './MainPage';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));