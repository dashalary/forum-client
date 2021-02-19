import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/posts'
import { addComment } from '../actions/posts'

class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <Comments comments={this.props.post.comments} />
        <CommentForm post={this.props.post}/><br/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts
  }
}



export default connect(mapStateToProps, {addComment, deleteComment})(CommentsContainer)