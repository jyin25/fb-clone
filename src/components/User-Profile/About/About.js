import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';

class About extends React.Component {
  constructor(props){
    super(props)
    this.state={
      edit_education: false,
      edit_email: false,
      edit_work: false,
      edit_currentCity: false,
      edit_aboutMe: false
    }
  }

  renderEducation = () => {
    return (
      <form>
        <input value={this.props.location.userBio[0].education}></input>
        <button onClick={() => this.handleEduFalse()}>Cancel</button>
        <button onClick={() => this.handleEduFalse()}>Save</button>
      </form>
    )
  }

  handleEduFalse = () => {
    this.setState({edit_education: false})
  }

  handleEdu = () => {
    this.setState({edit_education: true})
  }

  renderEmail = () => {
    return (
      <form>
        <input value={this.props.location.userBio[0].email}></input>
        <button onClick={() => this.handleEmailFalse()}>Cancel</button>
        <button onClick={() => this.handleEmailFalse()}>Save</button>
      </form>
    )
  }

  handleEmailFalse = () => {
    this.setState({edit_email: false})
  }

  handleEmail = () => {
    this.setState({edit_email: true})
  }



  renderWork = () => {
    return (
      <form>
        <input value={this.props.location.userBio[0].work}></input>
        <button onClick={() => this.handleWorkFalse()}>Cancel</button>
        <button onClick={() => this.handleWorkFalse()}>Save</button>
      </form>
    )
  }

  handleWorkFalse = () => {
    this.setState({edit_work: false})
  }

  handleWork = () => {
    this.setState({edit_work: true})
  }


  renderLocation = () => {
    return (
      <form>
        <input value={this.props.location.userBio[0].current_city}></input>
        <button onClick={() => this.handleLocationFalse()}>Cancel</button>
        <button onClick={() => this.handleLocationFalse()}>Save</button>
      </form>
    )
  }

  handleLocationFalse = () => {
    this.setState({edit_currentCity: false})
  }

  handleLocation = () => {
    this.setState({edit_currentCity: true})
  }


  renderAboutMe = () => {
    return (
      <form>
        <input value={this.props.location.userBio[0].about_me}></input>
        <button onClick={() => this.handleAboutMeFalse()}>Cancel</button>
        <button onClick={() => this.handleAboutMeFalse()}>Save</button>
      </form>
    )
  }

  handleAboutMeFalse = () => {
    this.setState({edit_aboutMe: false})
  }

  handleAboutMe = () => {
    this.setState({edit_aboutMe: true})
  }





  
  render() {
    let userBio = this.props.location.userBio
    return (
      <>
        <header>
          <div className="profile-header">
            <div className="or-user-icon"></div>
            <Link to="/user/about"><p>About</p></Link>
            <Link to="/user/friends"><p>Friends</p></Link>
            <Link to="/user/photos"><p>Photos</p></Link>
          </div>
        </header>
        <div className="about-container">
          <div>
            <h1>About</h1>
          </div>
          <div className="about-info">
            {userBio.map(data => {
              return (
                <>
                  {
                    data.education? 
                      <>
                        {this.state.edit_education?
                          this.renderEducation():
                           <>
                            {data.education}
                            <button onClick={() => this.handleEdu()}>Edit</button>
                           </>
                        }
                      </>:
                        <form>
                          <label>Add Education</label>
                          <input></input>
                          <button>Add</button>
                        </form>
                  }
                  {
                    data.email? 
                      <>
                        {this.state.edit_email?
                          this.renderEmail():
                           <>
                            {data.email}
                            <button onClick={() => this.handleEmail()}>Edit</button>
                           </>
                        }
                      </>:
                        <form>
                          <label>Add Education</label>
                          <input></input>
                          <button>Add</button>
                        </form>
                  }
                  {
                    data.work? 
                      <>
                        {this.state.edit_work?
                          this.renderWork():
                           <>
                            {data.work}
                            <button onClick={() => this.handleWork()}>Edit</button>
                           </>
                        }
                      </>:
                        <form>
                          <label>Add Work</label>
                          <input></input>
                          <button>Add</button>
                        </form>
                  }
                  {
                    data.current_city? 
                      <>
                        {this.state.edit_currentCity?
                          this.renderLocation():
                           <>
                            {data.current_city}
                            <button onClick={() => this.handleLocation()}>Edit</button>
                           </>
                        }
                      </>:
                        <form>
                          <label>Add Location</label>
                          <input></input>
                          <button>Add</button>
                        </form>
                  }
                  {
                    data.about_me? 
                      <>
                        {this.state.edit_aboutMe?
                          this.renderAboutMe():
                           <>
                            {data.about_me}
                            <button onClick={() => this.handleAboutMe()}>Edit</button>
                           </>
                        }
                      </>:
                        <form>
                          <label>Add About Me</label>
                          <input></input>
                          <button>Add</button>
                        </form>
                  }
                </>
              )
            })}

          </div>

        </div>
      </>
    )
  }
}

export default About