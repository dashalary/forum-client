import React, { Component } from 'react';
import Post from './Post'
import {Route, Link} from 'react-router-dom'

class PostList extends Component {
    render() {
        const { posts } = this.props;
        const postList = posts.map(post => {
            return (
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.content}</Link>
                    <hr />
                </div>
            )
        })
        return (
                <div className="card card-inverse card-success card-primary mb-3 text-center">
                <div className="card-block">
                    <blockquote className="card-blockquote">
              <br></br>
            {postList}
            </blockquote>
            </div>
            </div>
        );
      }
}

export default PostList