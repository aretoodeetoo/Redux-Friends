import {
    // Fetch Friend Action Creators
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAIL,
    // Add Friend Action Creators
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL,
    // Delete Friend Action Creators
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAIL,
    // Update Friend Action Creators
    UPDATE_FRIEND_START,
    UPDATE_FRIEND_SUCCESS,
    UPDATE_FRIEND_FAIL,
} from '../actions';

const initialState = {
    friends: [],
    isAddingFriend: false,
    isUpdating: false
}

const friends = (state = initialState, action) => {
    switch (action.type){
        case FETCH_FRIENDS_SUCCESS:
        return {
            ...state,
            friends: action.payload
        }
        case ADD_FRIEND_SUCCESS:
        return {
            ...state,
            friends: action.payload,
            isAddingFriend: false,
            error: ''
        }
        case DELETE_FRIEND_SUCCESS:
        return {
            ...state,
            friends: action.payload,
            error: ''
        }
        case UPDATE_FRIEND_SUCCESS:
        return {
            ...state,
            friends: action.payload,
            error: ''
        }

        default:
        return state;
    }
}

export default friends;