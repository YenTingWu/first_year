export interface ICenterPoint {
    x?: number;
    y?: number;
}

export interface IItemContainerInfo {
    centerPoint?: ICenterPoint;
    index?: number;
}

// Action Initial state types

export interface ICenterPointState {
    profileImageCenterPoint: ICenterPoint;
    itemsContainerCenterPoint: (ICenterPoint | undefined)[];
}

interface types {
    [name: string]: string
}

// Action types

export const centerPointActionTypes: types = {
    HANDLE_PROFILE_IMAGE_CP_CHANGE: 'HANDLE_PROFILE_IMAGE_CP_CHANGE',
    HANDLE_ITEMS_CONTAINER_CP_CHANGE: 'HANDLE_ITEMS_CONTAINER_CP_CHANGE'
};

// Action interface

export interface IHandeProfileImageCPChange {
    type: typeof centerPointActionTypes.HADDLE_PROFILE_IMAGE_CP_CHANGE;
    payload: ICenterPoint;
};
// ?????? code review
export interface IHandleItemsContainerCenterPoint {
    type: typeof centerPointActionTypes.HANDLE_ITEMS_CONTAINER_CP_CHANGE;
    payload: any;
}

export type ICenterPointActionTypes = 
    IHandeProfileImageCPChange | IHandleItemsContainerCenterPoint;
