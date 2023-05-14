import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/providers/StoreProvider';

/**
 * Custom hook that provides the dispatch function from Redux's store with specific type 'AppDispatch'.
 *
 * @returns - Redux's dispatch function with 'AppDispatch' type.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
