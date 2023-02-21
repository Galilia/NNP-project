import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { getCounterValue } from 'entities/Counter/model/selectors/counterSelectors';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{ counterValue }</h1>
            <Button onClick={increment} data-testid="increment-btn">
                increment
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                decrement
            </Button>
        </div>
    );
};
