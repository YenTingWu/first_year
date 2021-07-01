import { 
    IHomeState, 
    IHomeActionTypes, 
    homeActionTypes } from './home.types';

export const INITIAL_STATE: IHomeState = {
    started: true
};

const homeReducer = (state: IHomeState = INITIAL_STATE, action: IHomeActionTypes): IHomeState => {
    switch(action.type) {
        case homeActionTypes.TOGGLE_HOMEPAGE_START: 
            return {
                ...state,
                started: !state.started
            }
        default: 
            return state;
    }
};

export default homeReducer;