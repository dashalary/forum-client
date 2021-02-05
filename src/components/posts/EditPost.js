import React from 'react'
import {connect} from 'react-redux'
import {editPost} from '../../actions/posts'
import BackButton from '../BackButton'
import { Button, Form, Label } from 'semantic-ui-react'

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
      const size = "small"

        return (
            <div>
            <Form size={size} onSubmit={this.handleSubmit}>
              <Form.Field>
                    <br></br>
                    <br></br>
                    <label htmlFor="content" >Content:</label>
                    <br></br>
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChangeC}
                      />
                      </Form.Field>
                      <br></br>
                      <Form.Field>
                    <label htmlFor="author">Author:</label>
                    <br></br>
                      <textarea
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChangeA}
                      />
                    </Form.Field>
                    <br></br>
                      <Button color="pink" type="submit">Edit Post</Button>
                      <br></br>
                      <br></br>
                      <BackButton handleOnClick={(e) => this.handleGoBack(e)} />
            </Form>
            </div>
        )
    }
}

export default connect(null, { editPost })(EditPost)
    