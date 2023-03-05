/* eslint-disable no-unused-vars */
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<R, A, RejectedValue> = (
    arg: A
) => AsyncThunkAction<R, A, { rejectValue: string }>;

export class TestAsyncThunk<R, A, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<R, A, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<R, A, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: A) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
