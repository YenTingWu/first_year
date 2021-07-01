import { createSelector } from 'reselect';
import { IRootState } from '../root-reducer';
import { IFoucsingItemsState, IFocusingItem } from './focusingItems.types';


const selectFocusingItems = (state: IRootState): IFoucsingItemsState => state.focusingItems;

export const selectFocusingData = 
    createSelector<IRootState, IFoucsingItemsState, IFocusingItem[]>(
        [selectFocusingItems],
        focusingItems => focusingItems.focusingItemsData
    );