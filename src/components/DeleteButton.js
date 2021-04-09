import React from 'react';
// import { Button, Icon, Label } from 'semantic-ui-react'

const DeleteButton = (props) => {
    return (
        <button onClick={props.handleOnClick}>Delete Comment</button>
    )
}

export default DeleteButton