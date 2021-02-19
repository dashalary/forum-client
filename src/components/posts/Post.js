import React, {Component} from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import {Link} from 'react-router-dom'
import LikeButton from '../LikeButton'
import {connect} from 'react-redux'
import {likePost} from '../../actions/posts'
import {Button} from 'semantic-ui-react'

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
                    <p style={{fontSize: '18px'}}>{post.content}</p>
                    <br></br>
                    <footer style={{fontSize: '17px'}}>by: <cite title="Source Title">{post.author}</cite></footer>
                    <br></br>
                    <br></br>
                    <LikeButton post={post} handleOnClick={(e) => this.handleClick(e)} />
                    <br></br> 
                    <br></br>
                    <Link to={`/posts/${post.id}/edit`} style={{fontSize: '16px'}}><Button color="blue" size="medium" style={{fontSize: '15px'}}>Edit Post</Button></Link>
                    <br></br>
                    <br></br>
                    <CommentsContainer post={post}/><br/>
                    </blockquote>
                </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      posts: state.postReducer.posts
    }
}

export default connect(mapStateToProps, {likePost})(Post)