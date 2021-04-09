import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteComment } from '../../actions/posts'
import {Button} from 'semantic-ui-react'

class Comments extends Component {

  handleDelete = (comment) => {
    this.props.deleteComment(comment.id, comment.post_id)
    alert("Comment has been deleted.")
  }

  render() {
    if (this.props.comments === undefined || this.props.comments.length === 0) {
      return (
        <div>
          <hr />
          <br></br>
          <p style={{fontSize: '16px'}}>Be the first to comment below!</p>
        </div>
      )
    } else {
      return (
        <div>
          <hr />
          <br></br>
            <p style={{fontSize: '17px'}}><b>Comments:</b></p>
          <br></br>
         
            {this.props.comments.map(comment =>
              <li key={comment.id} style={{fontSize: '16px'}}>{comment.content} -- says <b>{comment.author}</b>
              <br></br>
              <br></br>
              <Button onClick={() => this.handleDelete(comment)} style={{fontSize: '14px'}}>Delete</Button>
              <br></br>
              <br></br>
              </li>
            )}
        
          <br></br>
          <hr />
        </div>
      )
    }
  }
}

  const mapStateToProps = state => {
    return {
      posts: state.postReducer.posts
    }
  }

export default connect(mapStateToProps, {deleteComment})(Comments)
