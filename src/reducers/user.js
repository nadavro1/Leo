import {
    FETCHING_USERS, 
    lOAD_USERS
} from '../actions/types';
import _ from 'lodash';

const initialState={
    loading:true,
    users:{},
    total_count:null
};

export default function(state=initialState,action){
    switch (action.type) {
        case FETCHING_USERS:
            return {...state,
                loading:true,
                users:{},
                total_count:null
            };
        case lOAD_USERS:
            return {
                ...state,
                loading:false,
                users:_.mapKeys(action.payload.items, 'id'),// will add to the state all the git users list as an object
                total_count:action.payload.total_count
            };
        default:
            return state;
    }
}