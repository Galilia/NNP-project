import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    validateProfileData,
} from '../../../model/services/validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/profileSelectors';
import { ValidateProfileError } from '../../consts/profileConsts';
import { Profile } from '@/entities/Profile';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
