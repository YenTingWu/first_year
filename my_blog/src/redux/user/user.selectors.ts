import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserInfos = createSelector(
    [selectUser],
    user => user.userInfos
);

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);