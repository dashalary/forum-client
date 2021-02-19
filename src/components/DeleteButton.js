import React from 'react';

const DeleteButton = (props) => {
    return (
        <button onClick={props.handleOnClick}>Delete Comment</button>
    )
}

export default DeleteButton