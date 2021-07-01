import { signInUserInfo, UserActionTypes, ICheckUserLogInInfo } from './user.types';

export type IUSERTypes = ICheckUserLogInInfo;

export const handleCurrentUser = (userInfo: signInUserInfo): IUSERTypes => ({
    type: UserActionTypes.HANDLE_CURRENT_USER,
    payload: userInfo
});