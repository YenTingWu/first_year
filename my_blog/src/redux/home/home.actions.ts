import { homeActionTypes, IHomeActionTypes } from './home.types';

export const toggleHomePageStart = (): IHomeActionTypes => ({
    type: homeActionTypes.TOGGLE_HOMEPAGE_START
});