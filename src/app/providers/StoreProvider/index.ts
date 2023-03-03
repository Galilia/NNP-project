import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { StateSchema } from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
};
