import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteComment } from '../../actions/posts'
import {Button} from 'semantic-ui-react'

class Comments extends Component {

    handleDelete = (comment) => {
      this.props.deleteComment(comment.id, comment.post_id)
    }

   render() {
     if (this.props.comments === undefined || this.props.comments.length === 0) {
       return (
         <div>
           <hr />
           <br></br>
         Be the first to comment below!
         </div>
       )
     } else {
     return (
         <div>
           <hr />
           <h3><b>Comments:</b></h3>
           <br></br>
          {this.props.comments.map(comment =>
           <li key={comment.id}>{comment.content} - says {comment.author}
           <br></br>
           <br></br>
           <Button color="pink" onClick={() => this.handleDelete(comment)}>Delete Comment</Button>
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
