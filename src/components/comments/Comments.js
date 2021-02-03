import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteComment } from '../../actions/posts'


class Comments extends Component {

    handleDelete = (comment) => {
      this.props.deleteComment(comment.id, comment.post_id)
    }
   
//     // like = (id) => {
//     //  this.setState({id ? id: id += 1 : id : 1})
//     // }
   
   render() {
    //  const comment = this.props.comments.select(comment => comment.id === commentId)
    //  const post = comments.post.select(post => post.id === postId)
    //   {/* <button onClick={() => this.like(c.id)}>Like Comment {this.state[c.id] ? this.state[c.id] : 0}</button><button onClick={() => this.handleDelete(c)}>Delete Comment</button></li> */}
    
     return (
         <div>
           <hr />
           <p>Comments:</p>
           
          {this.props.comments && this.props.comments.map(comment =>
           <li key={comment.id}>{comment.content} - says {comment.author}
           <br></br>
           <button onClick={() => this.handleDelete(comment)}>Delete Comment</button>
            </li>
          )}
         </div>
    )
  }
}

    const mapStateToProps = state => {
      return {
        comments: state.postReducer.comments,
        posts: state.postReducer.posts
      }
    }

   export default connect(mapStateToProps)(Comments)
