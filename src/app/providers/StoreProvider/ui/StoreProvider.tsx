import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({
    children,
    initialState,
}: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateSchema);
    return <Provider store={store}>{children}</Provider>;
};
