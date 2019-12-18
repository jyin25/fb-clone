import React from 'react';
import Search from '../Search/Search';
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar-container">
        <Search/>
        <nav className="nav-bar">
          <p><span>User</span>  |  <span>Home</span>  |  <span>Create</span></p>
          <p><span>Friend request icon</span> <span>mes</span>  <span>noti</span></p>
          <p>Logout icon</p>
        </nav>
      </div>
    )
  }
}

export default Nav;