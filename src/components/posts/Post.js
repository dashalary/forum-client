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
                <div className="card-block" style={{padding: "30px"}}>
                    <br></br>
                    <p style={{fontSize: '18px'}}>{post.content}</p>
                    <br></br>
                    <footer style={{fontSize: '17px'}}>by: {post.author}</footer>
                    <br></br>
                    <br></br>
                    <LikeButton post={post} handleOnClick={(e) => this.handleClick(e)} />
                    <br></br> 
                    <br></br>
                    <Link to={`/posts/${post.id}/edit`} style={{fontSize: '16px'}}><Button color="blue" size="medium" style={{fontSize: '15px'}}>Edit Post</Button></Link>
                    <br></br>
                    <br></br>
                    <CommentsContainer post={post}/><br/>
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