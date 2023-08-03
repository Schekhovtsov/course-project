import { UserRole } from '@/entities/User';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/constants/router';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { screen } from '@testing-library/react';

import { AppRouter } from './AppRouter';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('About page');

        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/krakozyabra',
        });

        const page = await screen.findByTestId('404');

        expect(page).toBeInTheDocument();
    });

    test('Редирект неавторизованного пользователя с профиля на главную', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('Main page');

        expect(page).toBeInTheDocument();
    });

    // test('Доступ к закрытой странице авторизованного пользователя', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteProfile('1'),
    //         initialState: {
    //             user: { _mounted: true, authData: {} },
    //         },
    //     });

    //     const page = await screen.findByTestId('Profile page');

    //     expect(page).toBeInTheDocument();
    // });

    test('Доступ запрещён по роли пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _mounted: true, authData: { roles: [UserRole.USER] } },
            },
        });

        const page = await screen.findByTestId('Forbidden page');

        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешен по роли пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _mounted: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('Admin panel page');

        expect(page).toBeInTheDocument();
    });
});
