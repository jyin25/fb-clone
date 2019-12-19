import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import {Switch, Route} from 'react-router-dom';
import UserProfile from './components/User-Profile/UserProfile';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/user" component={UserProfile}/>
        </Switch>
      </div>
    );
  }

}

export default App;
