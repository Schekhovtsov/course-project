import { componentRender } from '@/shared/lib/tests/componentRender';
import { Profile } from '@/entities/Profile';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstName: 'Sergey',
    lastName: 'Schekhovtsov',
    city: 'Stary Oskol',
};

const options = {
    initialState: {
        profile: {
            readOnly: true,
            data: profile,
            tempData: profile,
        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id="1" />, options);
    });

    test('Проверяет, входит ли профиль в режим редактирования', async () => {
        await userEvent.click(
            screen.getByTestId('ProfilePageHeader.EditButton')
        );
        expect(
            screen.getByTestId('ProfilePageHeader.CancelButton')
        ).toBeInTheDocument();
    });

    test('Проверяет, сбрасываются ли введенные значения после отмены редактирования', async () => {
        await userEvent.click(
            screen.getByTestId('ProfilePageHeader.EditButton')
        );

        await userEvent.clear(
            screen.getByTestId('EditableProfileCard.FirstnameInput')
        );

        await userEvent.type(
            screen.getByTestId('EditableProfileCard.FirstnameInput'),
            'Ivan'
        );

        expect(
            screen.getByTestId('EditableProfileCard.FirstnameInput')
        ).toHaveValue('Ivan');

        await userEvent.click(
            screen.getByTestId('ProfilePageHeader.CancelButton')
        );

        expect(
            screen.getByTestId('EditableProfileCard.FirstnameInput')
        ).toHaveValue('Sergey');
    });

    test('Проверяет валидацию', async () => {
        await userEvent.click(
            screen.getByTestId('ProfilePageHeader.EditButton')
        );

        await userEvent.clear(
            screen.getByTestId('EditableProfileCard.FirstnameInput')
        );

        await userEvent.click(
            screen.getByTestId('ProfilePageHeader.SaveButton')
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Text')
        ).toBeInTheDocument();
    });

    test('Проверяет, отправляется ли запрос на сервер', async () => {
        const mockPutRequest = jest.spyOn(api, 'put');

        await userEvent.click(
            screen.getByTestId('ProfilePageHeader.EditButton')
        );

        await userEvent.clear(
            screen.getByTestId('EditableProfileCard.FirstnameInput')
        );

        await userEvent.type(
            screen.getByTestId('EditableProfileCard.FirstnameInput'),
            'Ivan'
        );

        expect(
            screen.getByTestId('EditableProfileCard.FirstnameInput')
        ).toHaveValue('Ivan');

        await userEvent.click(
            screen.getByTestId('ProfilePageHeader.SaveButton')
        );

        expect(mockPutRequest).toHaveBeenCalled();
    });
});
