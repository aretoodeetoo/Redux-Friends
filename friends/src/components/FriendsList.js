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

const LogoWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 20%;
    margin-right: 1%;
`

const DeleteLogo = styled.img`
    margin-right: 4%;
`

const EditLogo = styled.img`
    margin-right: 10%;
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2%;
`

function FriendsList(props){
    return(
        <FriendListWrapper>
            {props.friends.map(friend => (
                <FriendWrapper key={friend.id}>
                {friend.name}
                <LogoWrapper>
                <EditLogo src="https://img.icons8.com/dusk/18/000000/edit.png"></EditLogo>
                <DeleteLogo src="https://img.icons8.com/office/18/000000/cancel.png" onClick={() => props.deleteFriend(friend.id)}></DeleteLogo>
                </LogoWrapper>
                </FriendWrapper>
            ))}
            <ImageWrapper>
            <img src="https://img.icons8.com/dusk/64/000000/sprout.png" alt="Sprouts"></img>
            <img src="https://img.icons8.com/dusk/64/000000/grass.png" alt="Fully bloomed friendship"></img>
            <img src="https://img.icons8.com/dusk/64/000000/sprout.png" alt="Sprouts"></img>
            </ImageWrapper>
        </FriendListWrapper>
    );
}

export default FriendsList;