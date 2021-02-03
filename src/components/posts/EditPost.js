import React from 'react'
import {connect} from 'react-redux'
import {editPost} from '../../actions/posts'

class EditPost extends React.Component {

    state = {
        content: '',
        author: ''
    }
    
    // handleOnChangeContent = (event) => {
    //     this.setState({...this.state,
    //         post: {...this.state.post,
    //             content: event.target.value
    //         }
    //     })
    // }

    // handleOnChangeAuthor = event => {
    //     this.setState({...this.state,
    //         post: {...this.state.post,
    //         author: event.target.value
    //         }
    //     })
    // }
    handleOnChangeC = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleOnChangeA = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        let post = {...this.state, id: this.props.post.id}
        this.props.editPost(post)
        this.setState({
            post: {
                content: "",
                author: "",
                likes: 0
            },
            loading: false,
        })
    }
    
    render() {
        return (
            <div>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <br></br>
                    <label htmlFor="content" className="col-md-4 control-label">Content:</label>
                    <div className="col-md-4">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChangeC}
                      />
                    </div>
                </div>
                  <div className="form-group">
                      <br></br>
                    <label htmlFor="author" className="col-md-4 control-label">Author:</label>
                    <div className="col-md-4">
                      <textarea
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChangeA}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-4 col-md-offset-4">
                        <br></br>
                      <button type="submit" color="#841584">Edit Post</button>
                    </div>
                  </div>
            </form>
            </div>
        )
    }
}
    
// EditPost.defaultProps = {
//     posts: {}
// }

export default connect(null, { editPost })(EditPost)
    