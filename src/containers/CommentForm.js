import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addComment } from '../actions/posts'

class CommentForm extends Component {
    state = {
        content: "",
        author: ""
    }

    handleOnChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addComment(this.state, this.props.post.id)
        // this.props.history.push("/posts")
        this.setState({
          content: "",
          author: ""
        })
    }

    render() {
        return (
            <div>
            <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                    <br></br>
                    <label htmlFor="content" className="col-md-4 control-label">Content:</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                      <br></br>
                    <label htmlFor="author" className="col-md-4 control-label">Author:</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                        <br></br>
                      <button type="submit">Add Comment</button>
                    </div>
                  </div>
            </form>
            </div>
        )
    }
}

export default connect(null, { addComment })(CommentForm)