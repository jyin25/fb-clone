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


class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      edit_bio: false,
      user_profile: [
        {
          userid: 1,
          user_name: "Jun Yin",
          education: "UCSC",
          email: "",
          work: "PowerSchool",
          current_city: "sacramento, ca",
          about_me: "a",
          friendList: 
            [
              {
                userid: 1,
                firstLast: "dog",
                photo: dog
              },
              {
                userid: 2,
                firstLast: "dog",
                photo: dog
              },
              {
                userid: 3,
                firstLast: "dog",
                photo: cat
              },
              {
                userid: 4,
                firstLast: "dog",
                photo: cat
              },
            ]
        }
      ],
      user_pictures: [
        {
          id: "asdf",
          userid: 1,
          photo: dog
        },
        {
          id: "asdf",
          userid: 1,
          photo: dog
        },
        {
          id: "asdf",
          userid: 1,
          photo: dog
        },
        {
          id: "asdf",
          userid: 1,
          photo: dog
        }
      ],
      users_post: [
        {
          user: "Jun Yin",
          status: "this project is hard",
          pictures: "a",
          time: "1/1/1",
          likes: 0,
          comments: 
          [
            {
              user: "Jun",
              comment: "You asdf sf asdf sdf sd f sdf as df asd fsa df sa dfs df sd fas df asdf as df sad fsa df sadf sad f sad fsd."
            },
            {
              user: "Jun",
              comment: "Can!"
            },
            {
              user: "Jun",
              comment: "Do it!"
            },
          ]
        },
        {
          users_post: "Kindrick Yin",
          status: "Milk!",
          pictures: "",
          time: "1/1/1",
          likes: 0,
          comments: 
          [
            {
              user: "Jun",
              comment: "Hi Baby!"
            },
            {
              user: "Annie",
              comment: "Hi Baby!"
            },
          ]
        }
      ],
    }
  }

  componentDidMount() {
    
  }

  handleBio = () => {
    this.setState({edit_bio: true})
  }

  handleBioFalse = () => {
    this.setState({edit_bio: false})
  }

  renderBio = () => {
    console.log('sdf')
    return (
      <form>
        <input value={this.state.user_profile[0].about_me}></input>
        <button onClick={() => this.handleBioFalse()}>Cancel</button>
        <button onClick={() => this.handleBioFalse()}>Save</button>
      </form>
    )
  }

  render() {
    console.log(this.state.edit_bio)
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
                      <button onClick={() => this.handleBio()}>Edit Bio</button>
                      </>}
                  </>: 
                  <form>
                    <label>Add a short bio to tell people more about yourself.</label>
                    <input></input>
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