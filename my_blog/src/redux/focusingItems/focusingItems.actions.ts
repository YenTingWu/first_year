import { 
    focusingItemsActionTypes, 
    IFocusingItem, 
    IFocusingItemsActionTypes } from './focusingItems.types';

export const handleItemChange =  (focusingItem: IFocusingItem): IFocusingItemsActionTypes => ({
    type: focusingItemsActionTypes.HANDLE_ITEM_CHANGE,
    payload: focusingItem
});