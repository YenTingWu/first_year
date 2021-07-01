export interface IFocusingItem {
    name: string;
    image: string;
    id: number;
    rect: {
        top: string;
        right?: string;
        width: string;
        height: string;
        left?: string;
    }
};

export interface IFoucsingItemsState {
    focusingItemsData: IFocusingItem[]
};

interface type {
    [key: string]: string
};

export const focusingItemsActionTypes: type = {
    HANDLE_ITEM_CHANGE: 'HANDLE_ITEM_CHANGE'
};

interface IHandleItemChange {
    type: typeof focusingItemsActionTypes.HANDLE_ITEM_CHANGE;
    payload: IFocusingItem;
};

export type IFocusingItemsActionTypes = IHandleItemChange;