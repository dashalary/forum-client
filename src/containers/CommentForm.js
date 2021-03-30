import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addComment } from '../actions/posts'
import { Button, Form } from 'semantic-ui-react'

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
    if (this.state.content === '' || this.state.author === '') {
      alert('Please fill in both author and content fields before hitting submit.')
    } else {
      this.props.addComment(this.state, this.props.post.id)
      alert('Your comment has been added!')
      this.setState({
        content: "",
        author: ""
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
      <Form size={size} onSubmit={this.handleOnSubmit} style={formStyle}>
        <Form.Field style={{fontSize: '15px'}}>
        <br></br>
        <p style={{fontSize: '18px'}}><b>What do you think?</b></p>
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
        <Form.Field style={{fontSize: '15px'}}>
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
        <Button type="submit" color="blue" style={{fontSize: '15px'}}>Add Comment</Button>
      </Form>
      </div>
    )
  }
}

export default connect(null, { addComment })(CommentForm)