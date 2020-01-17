import React from 'react';
import './UserProfile.css';
import Status from '../Status/Status';
import Newsfeed from '../Newsfeed/Newsfeed';
import FriendsList from './Friendlist/Friendlist';
import Intro from './Intro/Intro';
import Photo from './Photos/Photo';
import {Link} from 'react-router-dom';
import dog from '../../pictures/dog.jpg';
import cat from '../../pictures/cat.jpg';
import store from '../../store';
import Context from '../Context/Context';

class UserProfile extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props)
    this.state={
      edit_bio: false,
      user_profile: [],
      user_pictures: [],
      users_post: [],
      updateBio: ""
    }
  }

  componentWillMount() {
    this.setState({
      user_profile: store.profile,
      updateBio: store.profile[0].about_me,
      user_pictures: store.pictures,
      users_post: store.post
    })
  }

  componentDidUpdate() {
    console.log(this.context.updatedStatus.id)
    if(this.context.updatedStatus.id !== undefined && this.context.updatedStatus.id !== this.state.users_post[0].id) {
      //fetch new status
      const test = [...this.state.users_post]
      test.unshift(this.context.updatedStatus)
      this.handleNewPostState(test)
    }
  }

  handleNewPostState = async test => {
    await this.setState({users_post: test})
    console.log(this.state.users_post)
  }

  handleBio = () => {
    this.setState({edit_bio: true})
  }

  handleBioFalse = () => {
    this.setState({edit_bio: false})
  }

  updateBio = (e) => {
    console.log(e.target.value)
    this.setState({updateBio: e.target.value})
  }

  handleSaveBio = async (e) => {
    e.preventDefault()
    let newBioState = {...this.state.user_profile[0]}
    newBioState.about_me = this.state.updateBio
    await this.setState({user_profile: [newBioState]})
    this.setState({edit_bio: false})
    //send bio api
  }

  renderBio = () => {
    
    return (
      <form onSubmit={(e) => this.handleSaveBio(e)}>
        <input value={this.state.updateBio} onChange={(e) => this.updateBio(e)}></input>
        <button type="button" onClick={() => this.handleBioFalse()}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    )
  }

  render() {
    console.log(this.context.updatedStatus)
    return (
      <div>
        <header>
          <div className="profile-header">
            <div className="or-user-icon"></div>
            <Link to={{pathname: `/user/about`, userBio: this.state.user_profile}}><p>About</p></Link>
            <Link to="/user/friends"><p>Friends</p></Link>
            <Link to="/user/photos"><p>Photos</p></Link>
          </div>
        </header>
        <div className="profile-body">
          <div className="profile-left">
            <div className="intro">
              <header>Intro</header>
              {
                this.state.user_profile[0].about_me?
                  <>
                    {this.state.edit_bio? 
                      this.renderBio(): 
                      <>
                      {this.state.user_profile[0].about_me}
                      <button type="button" onClick={() => this.handleBio()}>Edit Bio</button>
                      </>}
                  </>: 
                  <form onSubmit={(e) => this.handleSaveBio(e)}>
                    <label>Add a short bio to tell people more about yourself.</label>
                    <input value={this.state.updateBio} onChange={(e) => this.updateBio(e)}></input>
                    <button type="submit">Add</button>
                  </form>
                }
            </div>
            <div className="photos">
              <header>Photos</header>
              <div className="profile-pictures-container">
                {this.state.user_pictures.map(data => {
                  return (
                    <div className="profile-user-pictures-container">
                      <img className="profile-user-pictures" src={data.photo}/>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="friend-list">
              <header>Friends</header>
              <div className="profile-friendlist-container">
              {this.state.user_profile[0].friendList.map(data => {
                return (
                  <Link to="/user">
                    <div className="profile-friendlist-pictures-container">
                      <img className="profile-friendlist-pictures" src={data.photo}/>
                      <p>{data.userid}</p>
                    </div>
                  </Link>
                )
              })}
              </div>
            </div>
          </div>
          <div className="profile-right">
            <Status/>
            <div className="posts">
              <Newsfeed users={this.state.users_post}></Newsfeed>
            </div>
          </div>
          
        </div>

      </div>
    )
  }
}

export default UserProfile;