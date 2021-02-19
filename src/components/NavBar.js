import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const link = {
  padding: '12px',
    // margin: '0 6px 6px',
    // background: 'pink',
  textDecoration: 'none'
}
  
const NavBar = () => {
  return (
    <div className="navbar">
    <Menu size='large' style={{fontSize: '16px'}} color='teal' inverted>
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
  