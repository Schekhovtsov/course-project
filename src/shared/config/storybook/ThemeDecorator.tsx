// eslint-disable-next-line feature-sliced-design/layers-hierarchy
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/constants/theme';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
