import React, { Component } from 'react';

import Header from './containers/Header/Header';
import Section from './containers/Section/Section';
import Background from './containers/Background/Background';
import Me from './containers/Me/Me';

import Start from './contents/Start/Start';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Header />
          <div className="sections">
              <Section name="start" content={<Start />} />
              <Section name="timeline" />
              <Section name="bio" />
              <Section name="portfolio" />
              <Section name="contact" />
          </div>
          <div className="me-wrapper">
              <Me />
          </div>
          <div className="backgrounds">
              <Background image="./images/backgrounds/section_00.jpg" />
              <Background image="./images/backgrounds/section_01.jpg" add="./images/backgrounds/section_01_add.png" />
              <Background image="./images/backgrounds/section_02.jpg" add="./images/backgrounds/section_02_add.png"/>
              <Background image="./images/backgrounds/section_03.jpg" add="./images/backgrounds/section_03_add.png"/>
              <Background image="./images/backgrounds/section_04.jpg" add="./images/backgrounds/section_04_add.png"/>
          </div>
      </div>
    );
  }
}

export default App;
