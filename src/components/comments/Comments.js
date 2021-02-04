import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteComment } from '../../actions/posts'


class Comments extends Component {

  // let com = props.posts.filter(p => p.id == props.match.params.id)[0]

    handleDelete = (comment) => {
      this.props.deleteComment(comment.id, comment.post_id)
    }

    // childComments = () => {
    //   const { comment, allComments } = this.props
    //   return allComments.filter(c => c.post_id === comment.id)
    // }
   render() {
    //  const comment = this.props.comments.select(comment => comment.id === commentId)
    //  const post = comments.post.select(post => post.id === postId)
    // const {comments, post_id} = this.props
    // let comments = this.props.comments 
    // comments.select(comment => comment.post_id === )
     return (
         <div>
           <hr />
           <p>Comments:</p>
          {this.props.comments.map(comment =>
           <li key={comment.id}>{comment.content} - says {comment.author}
           <br></br>
           <button onClick={() => this.handleDelete(comment)}>Delete Comment</button>
            </li>
          )}
          <br></br>
          <hr />
         </div>
    )
  }
}

    const mapStateToProps = state => {
      return {
        // comments: state.postReducer.comments,
        posts: state.postReducer.posts
      }
    }

   export default connect(mapStateToProps, {deleteComment})(Comments)
