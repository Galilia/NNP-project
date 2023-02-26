export interface LoginSchema {
    username: string;
    email: string;
    password: string;
    isLoading: boolean;
    token: string;
    error?: string;
}
