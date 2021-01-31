import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { post } = this.props;
    
        return (
          <div>
              {post.author} says:
              <br>
              </br>
              {post.content}
              {/* <button onClick={this.handleOnClick}>Delete</button> */}
              {/* <ReviewsContainer restaurant={restaurant}/> */}
          </div>
        );
    }
}

export default Post