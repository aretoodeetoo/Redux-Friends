import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const FormInputFields = styled.input`
    width: 95%;
    font-size: 16px;
`

const ConditionalHeader = styled.h1`
    color: #EFEEED;
`

const GrowthImage = styled.img`
    margin-top: 5%;
    height: 20px;
`

function FriendForm(props) {
    const handleClick = e => {
        e.preventDefault();
        props.addNewFriend();
        props.history.push('/');
    }

    return(
        <div>
            <ConditionalHeader>Add New Friend</ConditionalHeader>
            <form>
                <FormInputFields 
                type="text"
                name="name"
                onChange={props.changeHandler}
                placeholder="Name"
                value={props.friend.name}
                />

                 <FormInputFields 
                type="text"
                name="age"
                onChange={props.changeHandler}
                placeholder="Age"
                value={props.friend.age}
                />

                <FormInputFields 
                type="text"
                name="email"
                onChange={props.changeHandler}
                placeholder="Email"
                value={props.friend.email}
                />

                <button onClick={handleClick}>Add Friend</button>
            </form>

            <GrowthImage src="https://img.icons8.com/office/16/000000/potted-plant.png"></GrowthImage>
        </div>
    );
}

export default withRouter(FriendForm);