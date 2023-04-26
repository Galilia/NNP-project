import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
    idx: 0,
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
        setScrollIndex: (state, action: PayloadAction<number>) => {
            state.idx = action.payload;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
