import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import {Switch, Route} from 'react-router-dom';
import UserProfile from './components/User-Profile/UserProfile';
import Friendlist from './components/User-Profile/Friendlist/Friendlist';
import About from './components/User-Profile/About/About';
import Context from './components/Context/Context';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      updatedFeed: [],
      updatedStatus: {}
    }
  }

  updateNewsFeed = (value) => {
    this.setState({updatedFeed: value})
  }

  handleUpdateStatus = value => {
    this.setState({updatedStatus: value})
  }

  render() {
    const contextValue = {
      handleUpdateStatus: this.handleUpdateStatus,
      updatedStatus: this.state.updatedStatus
    }


    return (
      <div className="App">
        <Context.Provider value={contextValue}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/user" component={UserProfile}/>
            <Route exact path="/user/about" component={About}/>
            <Route exact path="/user/friends" component={Friendlist}/>
          </Switch>
        </Context.Provider>
      </div>
    );
  }

}

export default App;
