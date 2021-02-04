import React, { Component } from 'react';
import './App.css';
import PostsContainer from './containers/PostsContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <PostsContainer />
      </div>
    );
  }

}

export default App
