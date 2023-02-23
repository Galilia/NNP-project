import { StateSchema } from 'app/providers/StoreProvider';

export const loginSelectors = (state: StateSchema) => state?.loginForm;
