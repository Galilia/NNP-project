import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ThunkConfig } from './config/StateSchema';
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ThunkConfig,
};

export type { AppDispatch };
