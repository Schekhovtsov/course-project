/* eslint-disable i18next/no-literal-string */
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="title-value">{counterValue}</h1>
            <Button
                theme={ButtonTheme.SECONDARY}
                onClick={incrementHandler}
                data-testid="button-increment"
            >
                Increment
            </Button>
            <Button
                theme={ButtonTheme.SECONDARY}
                onClick={decrementHandler}
                data-testid="button-decrement"
            >
                Decrement
            </Button>
        </div>
    );
};
