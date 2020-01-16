import React from 'react';
import './Newsfeed.css';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      users: this.props.users,
    }
  }

  // componentDidMount() {
  //   this.setState({users: this.props.users})
  // }

  componentDidUpdate() {
    if(this.state.users.length !== this.props.users.length) {
      let newPosts = this.props.users
      this.handleUpdateUserPosts(newPosts)
    }
  }

  handleUpdateUserPosts = async newPosts => {
    this.setState({users: newPosts})
  }

  render() {
    console.log(this.props.users)
    console.log(this.state.users)
    return (
      <>
        <div>
          {this.state.users.map(userData => {
            return (
              <div className="news-container">
                <div className="news-header">
                <div className="or-user-icon"></div>
                  <div>
                    <p>{userData.user}</p>
                    <p>{userData.time}</p>
                  </div>
                </div>
                <div className="news-description">
                  <p>{userData.status}</p>
                </div>
                {userData.pictures.length === 0? null: 
                  <div className="news-picture">
                    {userData.pictures}
                  </div>
                }
                <div className="news-icons">
                  <AiOutlineLike />
                  <AiOutlineDislike/>
                </div>
                <div className="news-comments">
                  {userData.comments.map(userComments => {
                    return (
                      <div className="news-comments-icon-container">
                        <div className="news-user-comment-icon"></div>
                        <p><span className="news-user-comment-name">{userComments.user}</span> {userComments.comment}</p>
                      </div>
                    )
                  })}
                </div>
                <div>

                </div>
                <form className="news-add-comment">
                  <div className="or-user-icon"></div>
                  <input></input>
                </form>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default Newsfeed;