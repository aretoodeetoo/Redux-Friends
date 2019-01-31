import axios from 'axios';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAIL = 'ADD_FRIEND_FAIL';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export const addNewFriend = newFriend => dispatch => {
    dispatch({ type: ADD_FRIEND_START });
    axios
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data});
        })
        .catch(err => dispatch({ type: ADD_FRIEND_FAIL, payload: err }))
}

export const getFriendList = () => dispatch =>{
    dispatch ({ type: FETCH_FRIENDS_START });
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => 
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data})
            )
        .catch(err => dispatch({ type: FETCH_FRIENDS_FAIL, payload: err}))
}