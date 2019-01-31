import React from 'react';

function FriendForm(props) {
    const handleClick = e => {
        e.preventDefault();
        props.addNewFriend();
    }

    return(
        <div>
            <h1>Add New Friend</h1>
            <form>
                <input 
                type="text"
                name="name"
                onChange={props.changeHandler}
                placeholder="Name"
                value={props.friend.name}
                />

                 <input 
                type="text"
                name="age"
                onChange={props.changeHandler}
                placeholder="Age"
                value={props.friend.age}
                />

                <input 
                type="text"
                name="email"
                onChange={props.changeHandler}
                placeholder="Email"
                value={props.friend.email}
                />

                <button onClikc={handleClick}>Add Friend</button>
            </form>
        </div>
    );
}