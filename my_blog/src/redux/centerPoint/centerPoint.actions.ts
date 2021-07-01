import { 
    centerPointActionTypes, 
    ICenterPointActionTypes,
    ICenterPoint,
    IItemContainerInfo } from './centerPoint.types';

export const handleProfileImageCPChange = 
    (centerPoint: ICenterPoint): ICenterPointActionTypes => ({
        type: centerPointActionTypes.HANDLE_PROFILE_IMAGE_CP_CHANGE,
        payload: centerPoint
    });

export const handleItemsContainerCPChange = 
    (itemContainerInfo: IItemContainerInfo): ICenterPointActionTypes => ({
        type: centerPointActionTypes.HANDLE_ITEMS_CONTAINER_CP_CHANGE,
        payload: itemContainerInfo
    });