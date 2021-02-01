import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {getPosts} from '../actions/posts'
import PostList from '../components/PostList'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import NavBar from '../components/NavBar'

class PostsContainer extends React.Component {

  componentDidMount() {
    this.props.getPosts()
  }

    render() {
        return (
            <div>
            <NavBar/>
            <Switch>
                <Route path='/posts/new' container={PostForm}/>
                <Route path='/posts/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts}/>}/>
                <Route path='/posts' render={(routerProps) => <PostList {...routerProps} posts={this.props.posts}/>}/>
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
  console.log("I am state", state);
  return {
    posts: state.postReducer.posts,
    loading: state.postReducer.loading
  }
}

export default connect(mapStateToProps, {getPosts})(PostsContainer)


