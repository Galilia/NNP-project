import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';

export const getProfileError = (state: StateSchema) => state.profile?.error;

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;

export const getProfileData = (state: StateSchema) => state.profile?.data;

export const getProfileForm = (state: StateSchema) => state.profile?.form;

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;

export const canUserEdit = createSelector(
    getUserAuthData,
    getProfileData,
    (authData, profileData) => authData?.id === profileData?.id,
);
