import React, { Component } from 'react';

const BackButton = (props) => {

    return (
        <button onClick={props.handleOnClick}>
        Go Back
        </button>
    )
}

export default BackButton