import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    // width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'pink',
    textDecoration: 'none',
    color: 'white',
  }
  
  const NavBar = () => {
    return (
      <div className="navbar">
        <NavLink to="/" exact style={link} activeStyle={{background: 'pink'}}>Home</NavLink>
        <NavLink to="/posts" exact style={link} activeStyle={{background: 'pink'}}>Posts</NavLink>
        <NavLink to="/posts/new" exact style={link} activeStyle={{background: 'pink'}}>Make a Post</NavLink>
       <hr />
      </div>
    );
  };
  
  export default NavBar;
  