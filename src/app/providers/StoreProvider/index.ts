import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider';

import { createReduxStore, AppDispatch } from './config/store';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    StateSchema, ThunkConfig, StateSchemaKey, ReduxStoreWithManager,
} from './config/StateSchema';

export type { AppDispatch };
