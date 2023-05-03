import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';
// import { createSelector } from '@reduxjs/toolkit';
// import { CounterSchema } from '../types/counterSchema';
// export const getCounterValue = createSelector(
//     getCounter,
//     (counter: CounterSchema) => counter.value,
// );
export const getCounter = (state: StateSchema) => state.counter;

export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
