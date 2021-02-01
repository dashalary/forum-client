import React, { Component } from 'react';
import { addPost } from '../actions/posts';
import { connect } from 'react-redux'

class PostForm extends Component {

    state = {
        post: {
            content: "",
            author: "",
            votes: 0
        },
        loading: false
    }

    handleOnChange = event => {
        // this.setState({...this.state,
        // post: {...this.state.post,
        //     content: 

        // }
    // })
        const { value, name } = event.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const post = {...this.state.post}
        this.props.addPost(post)
        this.setState({
            post: {
                content: "",
                author: "",
                votes: 0
            },
            loading: false
        })
    }

    render() {
        return (
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
                      <input
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
                      <button type="submit">Post This</button>
                    </div>
                  </div>
            </form>
        )
    }
}

export default connect(null, { addPost })(PostForm);