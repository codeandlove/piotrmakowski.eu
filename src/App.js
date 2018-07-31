import React, { Component } from 'react';

import Section from './containers/Section/Section';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Section name="start" />
        <Section name="timeline" />
        <Section name="bio" />
      </div>
    );
  }
}

export default App;
