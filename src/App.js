import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import {Switch, Route} from 'react-router-dom';
import UserProfile from './components/User-Profile/UserProfile';
import Friendlist from './components/User-Profile/Friendlist/Friendlist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      updatedFeed: []
    }
  }

  updateNewsFeed = (value) => {
    this.setState({updatedFeed: value})
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/user" component={UserProfile}/>
          <Route exact path="/user/about" component={UserProfile}/>
          <Route exact path="/user/friends" component={Friendlist}/>
        </Switch>
      </div>
    );
  }

}

export default App;
