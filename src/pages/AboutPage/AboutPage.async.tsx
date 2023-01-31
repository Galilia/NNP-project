import { lazy } from 'react';
import AboutPage from './AboutPage';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));