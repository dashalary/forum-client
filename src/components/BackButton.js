import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

const BackButton = (props) => {

    return (
        <Button color="blue" onClick={props.handleOnClick}>
        Go Back
        </Button>
    )
}

export default BackButton