import React, { Component } from 'react';
import { addPost } from '../actions/posts';
import { connect } from 'react-redux'

class PostForm extends Component {

    state = {
        post: {
            content: "",
            author: "",
            likes: 0
        },
        loading: false
    }

    // handleOnChange = event => {
    //     // this.setState({...this.state,
    //     // post: {...this.state.post,
    //     //     content: 

    //     // }
    // // })
    //     const { value, name } = event.target
    //     this.setState({
    //         post: {
    //         [name]: value
    //         }
    //     })
    // }

    handleOnChangeContent = event => {
        this.setState({
            post: {
            [event.target.name]: event.target.value
            }
        })
    }

    handleOnChangeAuthor = event => {
        this.setState({
            [event.target.name]: event.target.value
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
                likes: 0
            },
            loading: false
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
                        onChange={this.handleOnChangeContent}
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
                        onChange={this.handleOnChangeAuthor}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                        <br></br>
                      <input type="submit" />
                    </div>
                  </div>
            </form>
            </div>
        )
    }
}

export default connect(null, { addPost })(PostForm);