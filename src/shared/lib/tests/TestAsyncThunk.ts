/* eslint-disable no-unused-vars */
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<R, A, RejectedValue> = (
    arg: A
) => AsyncThunkAction<R, A, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<R, A, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<R, A, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(
        actionCreator: ActionCreatorType<R, A, RejectedValue>,
        state?: DeepPartial<StateSchema>
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
    }

    async callThunk(arg: A) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
        });
        return result;
    }
}
