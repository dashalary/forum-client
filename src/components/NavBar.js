import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

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
      <Menu size='large'>
        <Menu.Item>
        <NavLink to="/" exact style={link} activeStyle={{background: 'pink'}}>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink to="/posts" exact style={link} activeStyle={{background: 'pink'}}>Posts</NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink to="/posts/new" exact style={link} activeStyle={{background: 'pink'}}>Make a Post</NavLink>
        </Menu.Item>
      </Menu>
       </div>
      
    );
  };
  
  export default NavBar;
  