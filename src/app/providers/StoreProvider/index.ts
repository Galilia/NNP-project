import { createReduxStore, AppDispatch } from './config/store';

import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    StateSchema, ThunkConfig, StateSchemaKey, ReduxStoreWithManager,
} from './config/StateSchema';

export type { AppDispatch };
