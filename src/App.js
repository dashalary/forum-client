import React, { Component } from 'react';
import './App.css';
import PostsContainer from './containers/PostsContainer'
// import 'bootstrap/dist/css/bootstrap.min.css';

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
