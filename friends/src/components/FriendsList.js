import React from 'react';
import styled from 'styled-components';

const FriendListWrapper = styled.div`
    border: 5px solid #EAB3A7;
    width: 100%;
`

const FriendWrapper = styled.div`
    border: 1px solid #FDE1D4;
    text-align: left;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: #384C39;
    color: #EFEEED;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
`

const DeleteLogo = styled.img`
    margin-right: 2%;
`

function FriendsList(props){
    return(
        <FriendListWrapper>
            {props.friends.map(friend => (
                <FriendWrapper key={friend.id}>
                {friend.name}
                <DeleteLogo src="https://img.icons8.com/office/16/000000/cancel.png"></DeleteLogo>
                </FriendWrapper>
            ))}
        </FriendListWrapper>
    );
}

export default FriendsList;