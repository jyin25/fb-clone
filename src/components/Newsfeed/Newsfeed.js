import React from 'react';
import './Newsfeed.css';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      users: [],
      likeCount: 0,
      dislikeCount: 0,
      counter: 0,
      clicked: false,
    }
  }

  componentDidMount() {
    console.log(this.props.users)
    this.setState({
      users: this.props.users,
      
    })
  }

  componentDidUpdate() {
    if(this.state.users.length !== this.props.users.length) {
      let newPosts = this.props.users
      this.handleUpdateUserPosts(newPosts)
    }

    // const filteredPost = this.state.users.filter(data => data.id === this.state.currentPost)
    // if  (filteredPost[0].likes !== this.state.likeCount) {
    //   let newFilteredPost = [...filteredPost]
    //   newFilteredPost[0].likes = this.state.likeCount
    //   let test = this.state.users.map(data => {
    //     if(data.id === this.state.currentPost) {
    //       data = newFilteredPost
    //     }
    //   })
    //   console.log(test)
    // }

  }

  handleUpdateUserPosts = async newPosts => {
    await this.setState({users: newPosts})
  }


  handleLikes = async (likes, data) => {
    await this.setState({likeCount: likes})
    this.likeCount(data)
  }

  likeCount = (data) => {
    this.setState({likeCount: this.state.likeCount+1})
    const newData = {...data}
    newData.likes = this.state.likeCount
    const newDataArr = [newData]
    //patch newDataArr using ID

    let newUserPosts = this.state.users.map(data => newDataArr.find(o => o.id === data.id) || data)

    console.log(newUserPosts)
    this.setState({users: newUserPosts})
  }

  handleDislikes = async(dislikes, data) => {
    await this.setState({dislikeCount: dislikes})
    this.dislikeCount(data)
  }

  dislikeCount = (data) => {
    this.setState({dislikeCount: this.state.dislikeCount+1})
    const newData = {...data}
    newData.dislikes = this.state.dislikeCount
    const newDataArr = [newData]
    //patch newDataArr using ID

    let newUserPosts = this.state.users.map(data => newDataArr.find(o => o.id === data.id) || data)

    console.log(newUserPosts)
    this.setState({users: newUserPosts})
  }

  render() {
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
                  <div>
                    <button onClick={(e) => this.handleLikes(userData.likes, userData)}><AiOutlineLike /></button>
                    {(this.state.counter > 0)? this.state.counter: userData.likes}
                  </div>
                  <div>
                    <button onClick={(e) => this.handleDislikes(userData.dislikes, userData)}><AiOutlineDislike/></button>
                    {(this.state.counter > 0)? this.state.counter: userData.dislikes}
                  </div>
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