import { useSelector } from 'react-redux';
import { getUserAuthData } from '../selectors/userSelectors';

export const useAuth = () => {
    const {
        email, token, id, username,
    } = useSelector(getUserAuthData);

    return {
        isAuth: !!email,
        username,
        email,
        token,
        id,
    };
};
