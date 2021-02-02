import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer'

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
                        <CommentsContainer post={post}/><br/>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Post