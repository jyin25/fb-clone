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
      edit_aboutMe: false,
      updateEducation: "",
      updateEmail: "",
      userInfo: [],
      updateWork: "",
      updateCurrentCity: "",
      updateAboutMe: ""
    }
  }

  componentDidMount() {
    this.setState({
      userInfo: this.props.location.userBio,
      updateEducation: this.props.location.userBio[0].education,
      updateEmail: this.props.location.userBio[0].email,
      updateWork: this.props.location.userBio[0].work,
      updateCurrentCity: this.props.location.userBio[0].current_city,
      updateAboutMe: this.props.location.userBio[0].about_me,
    })
  }



  renderEducation = () => {
    return (
      <form onSubmit={(e) => this.handleSubmitEducation(e)}>
        <input value={this.state.updateEducation} onChange={(e) => this.handleUpdateEducation(e)}></input>
        <button type="button" onClick={() => this.handleEduFalse()}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    )
  }

  handleUpdateEducation = (e) => {
    this.setState({updateEducation: e.target.value})
  }

  handleSubmitEducation = async (e) => {
    e.preventDefault()
    let newEducationInfo = [...this.props.location.userBio]
    newEducationInfo[0].education = this.state.updateEducation
    await this.setState({
      edit_education: false,
      userInfo: newEducationInfo
    })
    //send info to api
  }

  handleEduFalse = () => {
    this.setState({edit_education: false})
  }

  handleEdu = () => {
    this.setState({edit_education: true})
  }

  renderEmail = () => {
    return (
      <form onSubmit={(e) => this.handleSubmitEmail(e)}>
        <input value={this.state.updateEmail} onChange={(e) => this.handleUpdateEmail(e)}></input>
        <button type="button" onClick={() => this.handleEmailFalse()}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    )
  }

  handleUpdateEmail = (e) => {
    this.setState({updateEmail: e.target.value})
  }

  handleSubmitEmail = async (e) => {
    e.preventDefault()
    let newEmailInfo = [...this.state.userInfo]
    newEmailInfo[0].email = this.state.updateEmail

    await this.setState({
      edit_email: false,
      userInfo: newEmailInfo
    })
    //send info to api
  }

  handleEmailFalse = () => {
    this.setState({edit_email: false})
  }

  handleEmail = () => {
    this.setState({edit_email: true})
  }



  renderWork = () => {
    return (
      <form onSubmit={(e) => this.handleSubmitWork(e)}>
        <input value={this.state.updateWork} onChange={(e) => this.handleUpdateWork(e)}></input>
        <button type="button" onClick={() => this.handleWorkFalse()}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    )
  }

  handleUpdateWork =  (e) => {
    this.setState({updateWork: e.target.value})
  }

  handleSubmitWork = async (e) => {
    e.preventDefault()
    let newWorkInfo = [...this.state.userInfo]
    newWorkInfo[0].work = this.state.updateWork
    await this.setState({
      edit_work: false,
      userInfo: newWorkInfo
    })
    //send info to db
  }

  handleWorkFalse = () => {
    this.setState({edit_work: false})
  }

  handleWork = () => {
    this.setState({edit_work: true})
  }


  renderLocation = () => {
    return (
      <form onSubmit={(e) => this.handleSubmitLocation(e)}>
        <input value={this.state.updateCurrentCity} onChange={(e) => this.handleUpdateLocation(e)}></input>
        <button type="button" onClick={() => this.handleLocationFalse()}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    )
  }

  handleUpdateLocation = (e) => {
    this.setState({updateCurrentCity: e.target.value})
  }

  handleSubmitLocation = async (e) => {
    e.preventDefault()
    let newLocationInfo = [...this.state.userInfo]
    newLocationInfo[0].current_city = this.state.updateCurrentCity
    await this.setState({
      edit_currentCity: false,
      userInfo: newLocationInfo
    })
  }

  handleLocationFalse = () => {
    this.setState({edit_currentCity: false})
  }

  handleLocation = () => {
    this.setState({edit_currentCity: true})
  }


  renderAboutMe = () => {
    return (
      <form onSubmit={(e) => this.handleSubmitAboutMe(e)}>
        <input value={this.state.updateAboutMe} onChange={(e) => this.handleUpdateAboutMe(e)}></input>
        <button type="button" onClick={() => this.handleAboutMeFalse()}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    )
  }

  handleUpdateAboutMe = (e) => {
    this.setState({updateAboutMe: e.target.value})
  }

  handleSubmitAboutMe = async (e) => {
    e.preventDefault()
    let newAboutInfo = [...this.state.userInfo]
    newAboutInfo[0].about_me = this.state.updateAboutMe
    await this.setState({
      edit_aboutMe: false,
      userInfo: newAboutInfo
    })
  }

  handleAboutMeFalse = () => {
    this.setState({edit_aboutMe: false})
  }

  handleAboutMe = () => {
    this.setState({edit_aboutMe: true})
  }





  
  render() {
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
            {this.state.userInfo.map(data => {
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
                        <form onSubmit={(e) => this.handleSubmitEducation(e)}>
                          <label>Add Education</label>
                          <input value={this.state.updateEducation} onChange={(e) => this.handleUpdateEducation(e)}></input>
                          <button type="submit">Add</button>
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
                        <form onSubmit={(e) => this.handleSubmitEmail(e)}>
                          <label>Email</label>
                          <input value={this.state.updateEmail} onChange={(e) => this.handleUpdateEmail(e)}></input>
                          <button type="submit">Add</button>
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
                        <form onSubmit={(e) => this.handleSubmitWork(e)}>
                          <label>Add Work</label>
                          <input value={this.state.updateWork} onChange={(e) => this.handleUpdateWork(e)}></input>
                          <button type="submit">Add</button>
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
                        <form onSubmit={(e) => this.handleSubmitLocation(e)}>
                          <label>Add Location</label>
                          <input value={this.state.updateCurrentCity} onChange={(e) => this.handleUpdateLocation(e)}></input>
                          <button type="submit">Add</button>
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
                        <form onSubmit={(e) => this.handleSubmitAboutMe(e)}>
                          <label>Add About Me</label>
                          <input value={this.state.updateAboutMe} onChange={(e) => this.handleUpdateAboutMe(e)}></input>
                          <button type="submit">Add</button>
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