export type  signInUserInfo = {
    id: number;
    name: string;
    email: string;
    password: string;
} | null;


interface type {
    [name: string]: string;
}

export const UserActionTypes: type = {
    HANDLE_CURRENT_USER: 'HANDLE_CURRENT_USER'
}

export interface ICheckUserLogInInfo {
    type: typeof UserActionTypes.HANDLE_CURRENT_USER;
    payload: signInUserInfo
}

