import React from 'react';
import Nav from '../Nav/Nav';
import Newsfeed from '../Newsfeed/Newsfeed';
import Sidebar from '../Sidebar/Sidebar';
import Status from '../Status/Status';
import RightSide from '../Rightside/Right-side-bar';
import './Main.css'

function Main() {
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
          <Newsfeed/>
        </div>
      </section>
      <section className="right-side">
        <RightSide/>
      </section>
    </main>
    </>
  )
}

export default Main;