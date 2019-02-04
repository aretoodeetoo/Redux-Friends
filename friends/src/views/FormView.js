import React from 'react';
import { connect } from 'react-redux';

import FriendForm from '../components/FriendForm';
import { addNewFriend, updateFriend } from '../actions';

// const newFriendInfo = {
//     name: '',
//     age: '',
//     email: ''
// }

class FormView extends React.Component{
    state = {
        friend: {
            name: '',
            age: '',
            email: '',
            isUpdating: false
        }
    };

    changeHandler = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    addNewFriend = () => {
        this.props.addNewFriend(this.state.friend)
    }

    updateFriend = () => {
        this.props.updateFriend(this.state.friend)
    }

    render(){
        return(
            <FriendForm 
            addNewFriend={this.addNewFriend}
            changeHandler={this.changeHandler}
            friend={this.state.friend}
            updateFriend={this.updateFriend}
            />
        );
    }
}

const mapStateToProps = state => ({})

export default connect(
    mapStateToProps,
    { addNewFriend, updateFriend }
)(FormView);
