import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <Person name='Alex' age='26' />
        <Person name='Menu' age='29' >My hobbies: Racing</Person>
        <Person name='Sophy' agr='20' />
      </div>
    );
  }
}

export default App;
