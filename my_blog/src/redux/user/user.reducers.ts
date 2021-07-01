import { UserActionTypes } from './user.types';
import { IUSERTypes } from './user.actions'; 

const INITIAL_STATE = {
    userInfos: [
        {
            id: 0,
            name: 'Roy',
            email: 'a9600125a@gmail.com',
            password: '11111111'
        }
    ],
    currentUser: null
    
};

const userReducers = (state: typeof INITIAL_STATE = INITIAL_STATE, action: IUSERTypes) => {
    switch(action.type) {
        case UserActionTypes.HANDLE_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}

export default userReducers;