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
        if (this.state.content === '' || this.state.author === '') {
          alert('Please fill in both author and content fields before hitting submit.')
      } else {
        this.props.addComment(this.state, this.props.post.id)
        this.setState({
          content: "",
          author: "",
          likes: 0
        })
      }
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
                        cols="6"
                        placeholder="Your thoughts here"
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
                        placeholder="Your name here"
                        cols="6"
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