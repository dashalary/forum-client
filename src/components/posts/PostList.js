import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react'
import {Route, Link} from 'react-router-dom'

class PostList extends Component {
    render() {
        const { posts } = this.props;
        const postList = posts.map(post => {
            return (
                <div key={post.id}>
                    <Card centered>
                    <br></br>
                    <Link to={`/posts/${post.id}`} style={{fontSize: '15px'}}>{post.content}</Link>
                    <br></br>
                    </Card>
                   <br></br>
                </div>
            )
        })
        
        return (
                <div className="card card-inverse card-success card-primary mb-3 text-center">
                <div className="card-block">
                    <blockquote className="card-blockquote">
                        {postList}
                    </blockquote>
                </div>
                </div>
            );
      }
}

export default PostList