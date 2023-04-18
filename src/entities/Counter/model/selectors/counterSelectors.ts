import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
