export interface User {
    id: string;
    username?: string;
    email?: string;
    token?: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
