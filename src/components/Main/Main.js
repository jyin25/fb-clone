import React from 'react';
import Nav from '../Nav/Nav';
import Newsfeed from '../Newsfeed/Newsfeed';
import Sidebar from '../Sidebar/Sidebar';
import Status from '../Status/Status';
import RightSide from '../Rightside/Right-side-bar';
import './Main.css'

class Main extends React.Component {
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

  render() {
    return (
      <>
      <div>
        <Nav/>
      </div>
      <main className="main-container">
        <section className="left-side">
          <Sidebar/>
        </section>
        <section className="status-news-container">
          <Status/>
          <div>
            <Newsfeed users={this.state.users}/>
          </div>
        </section>
        <section className="right-side">
          <RightSide/>
        </section>
      </main>
      </>
    )
  }
}

export default Main;