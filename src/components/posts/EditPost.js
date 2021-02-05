import React from 'react'
import {connect} from 'react-redux'
import {editPost} from '../../actions/posts'
import BackButton from '../BackButton'

class EditPost extends React.Component {

    state = {
        post: {
            content: "",
            author: "",
            likes: 0
        },
        loading: false
    }

    handleGoBack = (e) => {
      this.props.history.goBack()
    }
   
    handleOnChangeC = (event) => {
        this.setState({...this.state,
            post: {...this.state.post,
            content: event.target.value
            }
        })
    }

    handleOnChangeA = (event) => {
        this.setState({...this.state,
            post: {...this.state.post,
            author: event.target.value
            }
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        let post = {...this.state.post, id: this.props.match.params.id}
        this.props.editPost(post)
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
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <br></br>
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
                      <button type="submit">Edit Post</button>
                      <br></br>
                      <br></br>
                      <BackButton handleOnClick={(e) => this.handleGoBack(e)} />
                    </div>
                  </div>
            </form>
            </div>
        )
    }
}

export default connect(null, { editPost })(EditPost)
    