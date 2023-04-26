import { Story } from '@storybook/react';

// import '@/app/styles/index.scss';
// TODO @/app/styles/index.scss remove?
// eslint-disable-next-line galilia-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/themeConst';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
