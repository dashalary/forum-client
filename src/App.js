import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PostForm from './containers/PostForm'
import { getPosts } from './actions/posts'
import PostList from './components/posts/PostList'
import Modal from 'react-bootstrap/Modal'
import {Route, Switch} from 'react-router-dom'
import Post from './components/posts/Post'
import NavBar from './components/NavBar'
import Home from './components/Home'


// handleLoading = () => {
//   if (this.props.loading) {
//     return <div>Loading posts...</div>
//   } else {
//     return <PostList posts={this.props.posts} />
//   }
// }

class App extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <div className="container-fluid">
        {/* <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          {/* <h1>Forum</h1> */}
        {/* </div>
        <hr />
        
        <h2>Make a Post</h2>
        <br></br>
        <PostForm />
        <hr />
        <h2>Posts</h2> */}
        {/* {this.handleLoading()} */}
        {/* <PostList /> */} 
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/posts/new' component={PostForm}/>
                <Route path='/posts/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts}/>}/>
                <Route path='/posts' render={(routerProps) => <PostList {...routerProps} posts={this.props.posts}/>}/>
            </Switch>
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
