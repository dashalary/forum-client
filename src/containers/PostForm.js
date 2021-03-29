import React, { Component } from 'react';
import { addPost } from '../actions/posts';
import { connect } from 'react-redux';
// import { useForm } from 'react-hook-form';
import { Button, Form, Header, TextArea } from 'semantic-ui-react'
// import FormError from './FormError'
// import { Formik, Form, Field, ErrorMessage } from "formik";


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

    handleOnChangeAuthor = (event) => {
        this.setState({...this.state,
            post: {...this.state.post,
            author: event.target.value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const post = {...this.state.post}
        if (post.content === '' || post.author === '') {
            // <FormError />
            alert('Please fill in both author and content fields before hitting submit.')
        } else {
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
    }


    render() {

        const formStyle = {
            margin: "auto",
            padding: "20px",
            width: "60%",
            height: "100vh"
        }

        return (
            <div>
                    <div className="card-block" style={formStyle}>
                        <Form size="small" onSubmit={this.handleOnSubmit}>
                            <Form.Field style={{fontSize: '15px'}}>
                            <br></br>
                            <Header as="h3" htmlFor="content">What do you think?</Header>
                            <br></br>
                                <TextArea
                                    placeholder="Your thoughts here"
                                    cols="6"
                                    name="content"
                                    value={this.state.content}
                                    onChange={this.handleOnChangeContent}
                                />
                            </Form.Field>
                            <br></br>
                            <Form.Field style={{fontSize: '15px'}}>
                            <br></br>
                                <TextArea
                                    placeholder="Your name here"
                                    cols="6"
                                    name="author"
                                    value={this.state.author}
                                    onChange={this.handleOnChangeAuthor}
                                />
                            </Form.Field>
                            <br></br>
                            <Button type="submit" color="blue" style={{fontSize: '15px'}}>Add Post</Button>
                        </Form>
                    </div>
            </div>
        )
    }
}

export default connect(null, { addPost })(PostForm);