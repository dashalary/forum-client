import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Comments from '../components/comments/Comments'

class CommentsContainer extends Component {

  render() {
    return (
      <div>
          <Comments comments={this.props.post && this.props.post.comments} />
          <CommentForm post={this.props.post}/><br/>
      </div>
    )
  }
}

export default CommentsContainer