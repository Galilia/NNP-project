import { ValidateProfileError } from '../../model/consts/profileConsts';
import {
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
} from './profileSelectors';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Galperin',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSelectors.test', () => {
    describe('getProfileData', () => {
        test('should return error', () => {
            const state: DeepPartial<StateSchema> = {
                profile: {
                    data,
                },
            };
            expect(getProfileData(state as StateSchema)).toEqual(data);
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileData(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileError', () => {
        test('should return true', () => {
            const state: DeepPartial<StateSchema> = {
                profile: {
                    error: '123',
                },
            };
            expect(getProfileError(state as StateSchema)).toEqual('123');
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileError(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileForm', () => {
        test('should return value', () => {
            const state: DeepPartial<StateSchema> = {
                profile: {
                    form: data,
                },
            };
            expect(getProfileForm(state as StateSchema)).toEqual(data);
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileForm(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileIsLoading', () => {
        test('should work with filled state', () => {
            const state: DeepPartial<StateSchema> = {
                profile: {
                    isLoading: true,
                },
            };
            expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileValidateErrors', () => {
        test('should work with filled state', () => {
            const state: DeepPartial<StateSchema> = {
                profile: {
                    validateErrors: [
                        ValidateProfileError.SERVER_ERROR,
                        ValidateProfileError.INCORRECT_AGE,
                    ],
                },
            };
            expect(getProfileValidateErrors(state as StateSchema)).toEqual([
                ValidateProfileError.SERVER_ERROR,
                ValidateProfileError.INCORRECT_AGE,
            ]);
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileReadonly', () => {
        test('should work with filled state', () => {
            const state: DeepPartial<StateSchema> = {
                profile: {
                    readonly: true,
                },
            };
            expect(getProfileReadonly(state as StateSchema)).toEqual(true);
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
        });
    });
});
