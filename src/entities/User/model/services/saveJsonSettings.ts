import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { setJsonSettingsMutation } from '../../api/userApi';
import { getJsonSettingsSelector } from '../selectors/jsonSettingsSelectors';
import { getUserAuthData } from '../selectors/userSelectors';
import { JsonSettings } from '../types/jsonSettings';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;

    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettingsSelector(getState());

    if (!userData) {
        return rejectWithValue('No userData found');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('no settings in response');
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
