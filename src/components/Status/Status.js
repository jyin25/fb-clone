import React from 'react';
import './Status.css';
import Context from '../Context/Context'

class Status extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props)
    this.state={
      status: ""
    }
  }

  handleStatusSubmit = (e) => {
    e.preventDefault();
    const newStatus = {
      id: 3,
      user: "Jun Yin",
      status: this.state.status,
      pictures: "a",
      time: "1/1/1",
      likes: 0,
      comments: []
    }
    
    this.context.handleUpdateStatus(newStatus)
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