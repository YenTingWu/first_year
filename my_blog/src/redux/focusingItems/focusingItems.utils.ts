import { IFocusingItem } from './focusingItems.types';

export const addFocusingItem = (focusingItems: IFocusingItem[], focusingItemToAdd: IFocusingItem): IFocusingItem[] => {
    const { image, id, name } = focusingItemToAdd;

    if(image && id && name) {
        return [...focusingItems, focusingItemToAdd];
    }

    return focusingItems;
}