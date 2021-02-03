import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteComment } from '../../actions/posts'

// const Comments = (props) => {
//   let post = this.props.posts.filter(p => p.id == props.match.params.id)[0]
//   return (
//     <div>
//       Comments:
//       {post.comments.map(comment =><li key={comment.id}>{comment.content} - {comment.author}</li>)}
//     </div>
//   )
// } 
class Comments extends Component {

  // state = {}

//     // handleDelete = (comment) => {
//     //    this.props.deleteComment(comment.id, comment.post_id)
//     // }
   
//     // like = (id) => {
//     //  this.setState({id ? id: id += 1 : id : 1})
//     // }
   
   render() {
    //  const comment = this.props.comments.select(comment => comment.id === commentId)
    //  const post = comments.post.select(post => post.id === postId)
    //   {/* <button onClick={() => this.like(c.id)}>Like Comment {this.state[c.id] ? this.state[c.id] : 0}</button><button onClick={() => this.handleDelete(c)}>Delete Comment</button></li> */}

     return (
         <div>
          {this.props.comments && this.props.comments.map(comment =>
           <li key={comment.id}>{comment.content} - {comment.author}</li>
          )}
          <hr />
          <p>Comments:</p>
         </div>
    )
  }
}


    const mapStateToProps = state => {
      return {
        comments: state.postReducer.comments 
      }
    }

   export default connect(mapStateToProps)(Comments)
  //  connect(null, {deleteComment})(Comments)