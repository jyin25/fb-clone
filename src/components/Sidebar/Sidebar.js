import React from 'react';
import Messenger from '../Messenger/Messenger';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <p>User info</p>
        <ul>
          <li>News Feed</li>
          <li>Messenger</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;