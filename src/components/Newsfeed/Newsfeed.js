import React from 'react';
import './Newsfeed.css'

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      users: [
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
          user: "Kindrick Yin",
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
      <>
        <div>
          {this.state.users.map(userData => {
            return (
              <div className="news-container">
                <div className="news-header">
                  <p>{userData.user}</p>
                  <p>{userData.time}</p>
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
                  <p>like icon</p>
                  <p>comment icon</p>
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