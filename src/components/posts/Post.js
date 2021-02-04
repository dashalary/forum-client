import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import {Route, Link} from 'react-router-dom'
import EditPost from './EditPost'
import LikeButton from '../LikeButton'

const Post = (props) => {

    let post = props.posts.filter(p => p.id == props.match.params.id)[0]

    return (
        <div>
            <div className="card card-inverse card-success card-primary mb-3 text-center">
                <div className="card-block">
                    <blockquote className="card-blockquote">
                        <br></br>
                    <p>{post.content}</p>
                        <footer>by: <cite title="Source Title">{post.author}</cite></footer>
                        <br></br>
                        <LikeButton />
                        <hr />
                        <p><b>Edit:</b></p>
                        <br></br>
                        {/* <Link to={`/posts/${post.id}`}>Edit Post</Link> */}
                        <EditPost post={post} />
                        <hr />
                        {/* <Link to={`/posts/${post.id}/comments`}>See Comments</Link> */}
                        <CommentsContainer post={post}/><br/>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Post