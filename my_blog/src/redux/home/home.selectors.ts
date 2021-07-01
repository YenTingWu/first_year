import { createSelector } from 'reselect';
import { IRootState } from '../root-reducer';
import { INITIAL_STATE } from './home.reducers';

export const selectHome = (state: IRootState): typeof INITIAL_STATE => state.home;

export const selectStarted = createSelector<IRootState, typeof INITIAL_STATE, boolean>(
    [selectHome],
    home => home.started
); 