import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteComment } from '../../actions/posts'

const Comments = (props) => {
  let post = props.posts.filter(p => p.id == props.match.params.id)[0]
  return (
    <div>
      {post.comments.map(comment =><li key={comment.id}>{comment.content} - {comment.author}</li>)}
    </div>
  )
} 
// class Comments extends Component {

  // state = {}

    // handleDelete = (comment) => {
    //    this.props.deleteComment(comment.id, comment.post_id)
    // }
   
    // like = (id) => {
    //  this.setState({id ? id: id += 1 : id : 1})
    // }
   
  //  render() {
    //   {/* <button onClick={() => this.like(c.id)}>Like Comment {this.state[c.id] ? this.state[c.id] : 0}</button><button onClick={() => this.handleDelete(c)}>Delete Comment</button></li> */}

    //  return (
    //      <div>
    //       {this.props.comments && this.props.comments.map(comment =>
    //        <li key={comment.id}>{comment.content} - {comment.author}</li>
    //       )}
    //       <hr />
    //       <p>Comments:</p>
    //      </div>
    //    )
    //  }
    // }
    export default Comments
    // const mapStateToProps = state => ({ comments: state.comments })
  //  export default connect(mapStateToProps)(Comments)
  //  connect(null, {deleteComment})(Comments)