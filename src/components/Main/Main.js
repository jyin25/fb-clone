import React from 'react';
import Nav from '../Nav/Nav';
import Newsfeed from '../Newsfeed/Newsfeed';
import Sidebar from '../Sidebar/Sidebar';
import Status from '../Status/Status';
import RightSide from '../Rightside/Right-side-bar';
import './Main.css';
import store from '../../store'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      usersfeed: [],
    }
  }



  componentWillMount = () => {
    this.setState({
      usersfeed: [
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
              comment: "asd!"
            },
            {
              user: "Jun",
              comment: "asdasd asdasd!"
            },
          ]
        },
        {
          user: "Kindrick Yin",
          status: "sadas!",
          pictures: "",
          time: "1/1/1",
          likes: 0,
          comments: 
          [
            {
              user: "Jun",
              comment: "sdf!"
            },
            {
              user: "Annie",
              comment: "sdf"
            },
          ]
        }
      ],
    })
  }

  componentDidUpdate = () => {
    if(this.state.usersFeed[0].time !== this.context.updatedFeed[0].time) {
      //fetchData and set to state
    }
  }
  

  render() {
    console.log(store.profile)
    return (
      <div>
        <Nav/>
        <main className="main-container">
          <section className="left-side">
            <Sidebar/>
          </section>
          <section className="status-news-container">
            <Status/>
            <div>
              
              <Newsfeed users={this.state.usersfeed}/>
            </div>
          </section>
          <section className="right-side">
            <RightSide/>
          </section>
        </main>
      </div>
    )
  }
}

export default Main;