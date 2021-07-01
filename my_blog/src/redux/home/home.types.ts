interface Type {
    [key: string]: string   
}

export const homeActionTypes: Type = {
    TOGGLE_HOMEPAGE_START: 'TOGGLE_HOMEPAGE_START'
}

// actions' types
interface IToggleHomePageStart {
    type: typeof homeActionTypes.TOGGLE_HOMEPAGE_START
};

// Initial state 
export interface IHomeState {
    started: boolean;
}

export type IHomeActionTypes = IToggleHomePageStart;
