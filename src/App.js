import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PostForm from './containers/PostForm'
import { getPosts } from './actions/posts'


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Forum</h1>
        </div>
        <hr />
        <h2>Make a Post</h2>
        <PostForm />
        <hr />
        <h2>Posts</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("I am state", state);
  return {
    posts: state.postReducer.posts,
    loading: state.postReducer.loading
  }
}

export default connect(mapStateToProps, { getPosts })(App)
