import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addComment } from '../actions/posts'
import { Button, Form, Header } from 'semantic-ui-react'

class CommentForm extends Component {
    state = {
        content: "",
        author: "",
        likes: 0
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
          author: "",
          likes: 0
        })
    }

    render() {
      const size = "small"
        return (
            <div>
            <Form size={size} onSubmit={this.handleOnSubmit}>
            <Form.Field>
            <br></br>
            <Header as="h3" htmlFor="content">Content:</Header>
            <br></br>
                      <textarea
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
            </Form.Field>
            <br></br>
            <Form.Field>
            <Header as="h3" htmlFor="author">Author:</Header>
            <br></br>
                      <textarea
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
            </Form.Field>
            <br></br>
            <Button type="submit" color="pink">Add Comment</Button>
            </Form>
          </div>
        )
    }
}

export default connect(null, { addComment })(CommentForm)