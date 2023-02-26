import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByEmailProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps>(
    'login/signUpByEmail',
    // @ts-ignore
    async ({ email, password }, thunkAPI) => {
        try {
            const auth = getAuth();

            const response = await signInWithEmailAndPassword(auth, email, password);

            if (!response.user) {
                throw new Error();
            }

            const data = {
                email: response.user.email,
                id: response.user.uid,
                token: response.user.refreshToken,
            };

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            thunkAPI.dispatch(userActions.setAuthData(data));

            return response;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
