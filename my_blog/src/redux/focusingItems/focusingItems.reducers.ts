import { 
    focusingItemsActionTypes, 
    IFoucsingItemsState,
    IFocusingItemsActionTypes 
} from './focusingItems.types';
import { FOCUSING_ITEMS_DATA } from '../../data/focusing_items_data';

import { addFocusingItem } from './focusingItems.utils';

const INITIAL_STATE: IFoucsingItemsState = {
    focusingItemsData: FOCUSING_ITEMS_DATA
};

const focusingItemsReducer = (
    state: IFoucsingItemsState = INITIAL_STATE, 
    action: IFocusingItemsActionTypes
    )
    : IFoucsingItemsState => {
    switch(action.type) {
        case focusingItemsActionTypes.HANDLE_ITEM_CHANGE: 
            return {
                ...state,
                focusingItemsData: addFocusingItem(state.focusingItemsData, action.payload)
            }
        default:  
            return state;
    }
}

export default focusingItemsReducer;