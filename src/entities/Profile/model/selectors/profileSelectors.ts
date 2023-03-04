import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileError = (state: StateSchema) => state.profile?.error;

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;

export const getProfileData = (state: StateSchema) => state.profile?.data;

export const getProfileFirstname = (state: StateSchema) => state?.profile?.data?.first || '';
