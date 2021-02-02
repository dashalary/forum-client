import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteComment } from '../../actions/posts'

class Comments extends Component {

    state = {}

    handleDelete = (comment) => {
       this.props.deleteComment(comment.id, comment.post_id)
    }
   
    like = (id) => {
     this.state[id] ? this.setState({[id]: this.state[id] += 1}) : this.setState({[id]: 1})
    }
   
   render() {
     return (
         <div>
           {this.props.comments && this.props.comments.map(c =>
             <li key={c.id}>{c.content} - {c.author} <button onClick={() => this.like(c.id)}>Like Comment {this.state[c.id] ? this.state[c.id] : 0}</button><button onClick={() => this.handleDelete(c)}>Delete Comment</button></li>
           )}
         </div>
       )
     }
    }
   
   export default connect(null, {deleteComment})(Comments)