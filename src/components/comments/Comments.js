import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteComment } from '../../actions/posts'
import DeleteButton from '../DeleteButton'

class Comments extends Component {

    handleDelete = (comment) => {
      this.props.deleteComment(comment.id, comment.post_id)
    }

   render() {
     if (this.props.comments === undefined || this.props.comments.length === 0) {
       return (
         <p>Be the first one to comment below!</p>
       )
     } else {
     return (
         <div>
           <hr />
           <p><b>Comments:</b></p>
           <br></br>
          {this.props.comments.map(comment =>
           <li key={comment.id}>{comment.content} - says {comment.author}
           <br></br>
           <br></br>
           <button onClick={() => this.handleDelete(comment)}>Delete Comment</button>
           <br></br>
           <br></br>
            </li>
          )}
          <br></br>
          <hr />
         </div>
    )
  }}
}

    const mapStateToProps = state => {
      return {
        posts: state.postReducer.posts
      }
    }

   export default connect(mapStateToProps, {deleteComment})(Comments)
