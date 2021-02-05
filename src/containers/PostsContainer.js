import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm'
import { getPosts } from '../actions/posts'
import PostList from '../components/posts/PostList'
import {Route, Switch} from 'react-router-dom'
import Post from '../components/posts/Post'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Comments from '../components/comments/Comments'
import EditPost from '../components/posts/EditPost'
// import { withRouter } from 'react-router-dom'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.getPosts()
    }
    
      render() {
        return (
          <div className="container-fluid">
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/posts/new' component={PostForm}/>
                    <Route path='/posts/:id/edit' render={(routerProps) => <EditPost {...routerProps}  />}/>
                    <Route path='/posts/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts}/>}/>
                    <Route exact path='/posts' render={(routerProps) => <PostList {...routerProps} posts={this.props.posts}/>}/>
                    <Route path='/posts/:post_id/comments' render={(routerProps) => <Comments {...routerProps} comments={this.props.post.comments}/>}/>
                    
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
    
export default connect(mapStateToProps, { getPosts })(PostsContainer)

// getComments 