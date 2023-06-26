import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line feature-sliced-design/layers-hierarchy
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { Theme } from '@/shared/constants/theme';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

// eslint-disable-next-line feature-sliced-design/layers-hierarchy
import '@/app/styles/index.scss';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions;
}

export const TestProvider = ({ children, options = {} }: TestProviderProps) => {
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState}
                asyncReducers={asyncReducers}
            >
                <ThemeProvider initialTheme={theme}>
                    <I18nextProvider i18n={i18nForTest}>
                        {children}
                    </I18nextProvider>
                </ThemeProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {}
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
