import React from 'react';
import './UserProfile.css';
import Status from '../Status/Status';
import Newsfeed from '../Newsfeed/Newsfeed';
import FriendsList from './Friendlist/Friendlist';
import Intro from './Intro/Intro';
import Photo from './Photos/Photo';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      user_profile: [
        {
          userid: 1,
          user_name: "Jun Yin",
          education: "UCSC",
          email: "jyin25@gmail.com",
          work: "PowerSchool",
          current_city: "sacramento, ca",
          about_me: "asdfsadfsa"
        }
      ],
      user_pictures: [
        {
          id: "asdf",
          userid: 1
        },
        {
          id: "asdf",
          userid: 1
        },
        {
          id: "asdf",
          userid: 1
        },
        {
          id: "asdf",
          userid: 1
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

  render() {
    return (
      <div>
        <header>
          <div className="profile-header">
            <div className="or-user-icon"></div>
            <p>About</p>
            <p>Friends</p>
            <p>Photos</p>
          </div>
        </header>
        <div className="profile-body">
          <div className="profile-left">
            <div className="intro"></div>
            <div className="photos"></div>
            <div className="friend-list"></div>
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