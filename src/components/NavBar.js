import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const link = {
  padding: '12px',
  borderRadius: '10px',
  textDecoration: 'none'
}

const menuStyle = {
  overflow: 'hidden',
  display: 'flex',
  fontSize: '20px',

}

const NavBar = () => {
  return (
    <div class="navbar">
    <Menu secondary size='large' style={menuStyle} >
      <Menu.Item>
      <NavLink to="/" exact style={link}>Home</NavLink>
      </Menu.Item>
      <Menu.Item>
      <NavLink to="/posts" exact style={link}>Posts</NavLink>
      </Menu.Item>
      <Menu.Item>
      <NavLink to="/posts/new" exact style={link}>Make a Post</NavLink>
      </Menu.Item>
    </Menu>
    </div>
  )
}
  
export default NavBar;
  