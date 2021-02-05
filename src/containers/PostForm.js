import React, { Component } from 'react';
import { addPost } from '../actions/posts';
import { connect } from 'react-redux';
import { Button, Form, Header } from 'semantic-ui-react'

class PostForm extends Component {

    state = {
        post: {
            content: "",
            author: "",
            likes: 0
        },
        loading: false
    }

    handleOnChangeContent = (event) => {
        this.setState({...this.state,
            post: {...this.state.post,
                content: event.target.value
            }
        })
    }

    handleOnChangeAuthor = event => {
        this.setState({...this.state,
            post: {...this.state.post,
            author: event.target.value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const post = {...this.state.post}
        this.props.addPost(post)
        this.props.history.push('/posts');
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
              <br></br>
            <Form size="small" onSubmit={this.handleOnSubmit}>
            <Form.Field>
            <br></br>
            <Header as="h3" htmlFor="content">Content:</Header>
            <br></br>
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChangeContent}
                      />
            </Form.Field>
            <br></br>
            <Form.Field>
            <Header as="h3" htmlFor="author">Author:</Header>
            <br></br>
                      <textarea
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChangeAuthor}
                      />
            </Form.Field>
            <br></br>
            <Button type="submit" color="pink">Add Post</Button>
            </Form>
            </div>
        )
    }
}

export default connect(null, { addPost })(PostForm);