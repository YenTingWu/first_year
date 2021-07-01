import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homeReducer from './home/home.reducers';
import focusingItemsReducer from './focusingItems/focusingItems.reducers';
import centerPointReducers from './centerPoint/centerPoint.reducers';
import articlesInfoReducers from './articlesInfo/articlesInfo.reducers';
import userReducers from './user/user.reducers';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['focusingItems', 'user']
}

const rootReducer = combineReducers({
    home: homeReducer,
    focusingItems: focusingItemsReducer,
    centerPoint: centerPointReducers,
    articlesInfo: articlesInfoReducers,
    user: userReducers,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);