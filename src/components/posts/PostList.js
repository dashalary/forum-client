import React, { Component } from 'react';
import Post from './Post'
import {Route, Link} from 'react-router-dom'

class PostList extends Component {
    render() {
        const { posts } = this.props;
        const postList = posts.map(post => {
        return (
            <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.content}</Link>
            </li>
        )
        })
        return (
          <ul>
              <br></br>
            {postList}
          </ul>
        // <p>test</p>
        );
      }
}

export default PostList