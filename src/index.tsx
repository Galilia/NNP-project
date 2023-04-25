import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import './shared/config/i18n/i18n';
import '../firebase';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Container root not found. Can not render react app');
}
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
export { Theme } from '@/shared/const/themeConst';
