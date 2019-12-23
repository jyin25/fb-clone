import React from 'react';
import './Status.css';

class Status extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      status: ""
    }
  }

  handleStatusSubmit = (e) => {
    e.preventDefault();
    //create new entry in database
    //fetch new entry
    //set new entry data to the App state
  }

  handleInput = (e) => {
    this.setState({status: e.target.value})
  }




  render() {
    return (
      <div className="status-entry-container">
        <div className="or-user-icon"></div>
        <form onSubmit={(e) => this.handleStatusSubmit(e)}>
          <input value={this.state.status} onChange={(e) => this.handleInput(e)}></input>
          <button type="submit">Post</button>
        </form>
      </div>
    )
  }
}

export default Status;