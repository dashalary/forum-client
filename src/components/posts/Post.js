import React, {Component} from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import {Route, Link} from 'react-router-dom'
import EditPost from './EditPost'
import LikeButton from '../LikeButton'
import {connect} from 'react-redux'
import {likePost} from '../../actions/posts'

class Post extends Component {
    
    handleClick = (e) => {
        let post = this.props.posts.filter(p => p.id == this.props.match.params.id)[0]
       this.props.likePost({...post, likes: post.likes + 1})
    }

    render() {

    let post = this.props.posts.filter(p => p.id == this.props.match.params.id)[0]

    return (
        <div>
            <div className="card card-inverse card-success card-primary mb-3 text-center">
                <div className="card-block">
                    <blockquote className="card-blockquote">
                        <br></br>
                    <p>{post.content}</p>
                        <footer>by: <cite title="Source Title">{post.author}</cite></footer>
                        <br></br>
                        <LikeButton post={post} handleOnClick={(e) => this.handleClick(e)} />
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
}}


const mapStateToProps = state => {
    return {
      posts: state.postReducer.posts
    }
}

export default connect(mapStateToProps, {likePost})(Post)