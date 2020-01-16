import React from 'react';
import Search from '../Search/Search';
import './Nav.css'
import {Link} from 'react-router-dom';
import {FaUserFriends, FaBell} from 'react-icons/fa';
import {AiOutlineLogout} from 'react-icons/ai';


class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar-container">
        <Search/>
        <nav className="nav-bar">
          <p><span className="home-padding"><Link to="/user">User</Link></span>  |  <span className="icon-padding">Home</span>  </p>
          <p><span className="icon-padding"><FaUserFriends/></span>  <span className="icon-padding"><FaBell/></span>  <span className="icon-padding"><AiOutlineLogout/></span></p>
        </nav>
      </div>
    )
  }
}

export default Nav;