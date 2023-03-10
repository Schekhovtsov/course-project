import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
    // eslint-disable-next-line no-unused-vars
    [name in StateSchemaKey]?: Reducer;
};

export const useDynamicReducerLoader = (
    reducersList: ReducersList,
    keepAfterUnmount: boolean = true
) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducersList).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            Object.entries(reducersList).forEach(([name]) => {
                if (!keepAfterUnmount) {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                }
            });
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
