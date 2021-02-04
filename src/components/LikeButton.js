import React, { Component } from 'react';

class LikeButton extends Component {

    state = {
        likes: 0
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes += 1
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>Likes: {this.state.likes}</button>
        )
    }
}

export default LikeButton