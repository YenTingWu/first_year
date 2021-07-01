import { createSelector } from 'reselect';
import { ICenterPointState } from './centerPoint.types';

const selectCenterPoint = (state): ICenterPointState => state.centerPoint;

export const selectItemsContainerCenterPoint = createSelector(
    [selectCenterPoint],
    centerPoint => centerPoint.itemsContainerCenterPoint
);

export const selectProfileImageCenterPoint = createSelector(
    [selectCenterPoint],
    centerPoint => centerPoint.profileImageCenterPoint
);
