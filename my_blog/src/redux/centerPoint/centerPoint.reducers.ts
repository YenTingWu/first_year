import { ICenterPointActionTypes, centerPointActionTypes, ICenterPointState } from './centerPoint.types';
import { handleItemsCPChangeWithIndex } from './centerPoint.utils';

const INITIAL_STATE: ICenterPointState = {
    profileImageCenterPoint: {},
    itemsContainerCenterPoint: []
};

const centerPointReducers = (
    state = INITIAL_STATE, 
    action: ICenterPointActionTypes
    ): any => 
    // ??????????
{
    const { itemsContainerCenterPoint } = state;

    switch(action.type) {
        case centerPointActionTypes.HANDLE_PROFILE_IMAGE_CP_CHANGE: 
            return {
                ...state,
                profileImageCenterPoint: action.payload
            }
        case centerPointActionTypes.HANDLE_ITEMS_CONTAINER_CP_CHANGE: 
            return {
                ...state,
                itemsContainerCenterPoint: 
                handleItemsCPChangeWithIndex(itemsContainerCenterPoint, action.payload)
            }
        default: 
            return state;
    }
};

export default centerPointReducers;