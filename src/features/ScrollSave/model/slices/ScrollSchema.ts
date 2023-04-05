import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
        setScrollArticleListItemId: (state, { payload }: PayloadAction<{path: string, id: number}>) => {
            state.scroll[payload.path] = payload.id;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
