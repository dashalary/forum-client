import React from 'react'
import {connect} from 'react-redux'
import {editPost} from '../../actions/posts'
import BackButton from '../BackButton'
import { Button, Form, Header } from 'semantic-ui-react'

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
        if (post.content === '' || post.author === '') {
          alert('Please fill in both author and content fields before hitting submit.')
        } else {
          this.props.editPost(post)
          alert('Success! You have edited the post.')
          this.props.history.push('/posts');
          this.setState({
              post: {
                  content: "",
                  author: "",
                  likes: 0
              },
              loading: false
          })
        }
    }

    
    render() {
      const size = "small"
      const formStyle = {
        margin: "auto",
        padding: "20px",
        width: "60%",
        height: "100vh"
    }
        return (
            <div>
                    <Form size={size} style={formStyle} onSubmit={this.handleSubmit}>
                      <Form.Field style={{fontSize: '15px'}}>
                      <br></br>
                      <Header as="h3" htmlFor="content" >What do you think?</Header>
                      <br></br>
                      <textarea
                        cols="6"
                        placeholder="Your thoughts here"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChangeC}
                      />
                      </Form.Field>
                      <br></br>
                      <Form.Field style={{fontSize: '15px'}}>
                      <br></br>
                      <textarea
                      cols="6"
                      placeholder="Your name here"
                      name="author"
                      value={this.state.author}
                      onChange={this.handleOnChangeA}
                      />
                      </Form.Field>
                      <br></br>
                      <Button color="pink" type="submit">Edit Post</Button>
                      <br></br>
                      <br></br>
                    </Form>
                    <BackButton handleOnClick={(e) => this.handleGoBack(e)} />
            </div>
        ) 
    }
}

export default connect(null, { editPost })(EditPost)
    