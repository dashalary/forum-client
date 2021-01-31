import React, { Component } from 'react';
import { addPost } from '../actions/posts';
import { connect } from 'react-redux'

class PostForm extends Component {

    state = {
        post: {
            content: "",
            author: "",
            votes: 0
        },
        loading: false
    }

    handleOnChange = event => {
        // this.setState({...this.state,
        // post: {...this.state.post,
        //     content: 

        // }
    // })
        const { value, name } = event.target
        this.setState({
            [name]: value
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
                votes: 0
            },
            loading: false
        })
    }

}