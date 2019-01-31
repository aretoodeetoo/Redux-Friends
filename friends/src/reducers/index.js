import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAIL,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL
} from '../actions';

const initialState = {
    friends: [],
    isAddingFriend: false
}

const friends = (state = initialState, action) => {
    switch (action.type){
        case FETCH_FRIENDS_SUCCESS:
        return {
            ...state,
            friends: action.payload
        }
        case ADD_FRIEND_SUCCESS:
        return{
            ...state,
            friends: action.payload,
            isAddingFriend: false,
            error: ''
        }

        default:
        return state;
    }
}

export default friends;