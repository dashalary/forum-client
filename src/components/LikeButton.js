import React, { Component } from 'react';


const LikeButton = (props) => {

        return (
            <button onClick={props.handleOnClick}>Likes: {props.post.likes}</button>
        )
}

export default LikeButton