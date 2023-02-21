import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter, getCounterValue } from './counterSelectors';

describe('counterSelectors', () => {
    describe('getCounter', () => {
        test('should return counter value', () => {
            const state: DeepPartial<StateSchema> = {
                counter: { value: 10 },
            };
            expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
        });
    });

    describe('getCounterValue', () => {
        test('should return counter value', () => {
            const state: DeepPartial<StateSchema> = {
                counter: { value: 10 },
            };
            expect(getCounterValue(state as StateSchema)).toEqual(10);
        });
    });

})
