import { StateSchema } from '@/app/providers/StoreProvider';

export const loginSelectors = (state: StateSchema) => state?.loginForm;

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';

export const getLoginEmail = (state: StateSchema) => state?.loginForm?.email || '';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
