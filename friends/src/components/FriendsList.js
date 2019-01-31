import React from 'react';
import styled from 'styled-components';

const FriendWrapper = styled.div`
    border: 1px solid red;
`

function FriendsList(props){
    return(
        <div className="friendWrapper">
            {props.friends.map(friend => (
                <FriendWrapper key={friend.id}>{friend.name}</FriendWrapper>
            ))}
        </div>
    );
}

export default FriendsList;