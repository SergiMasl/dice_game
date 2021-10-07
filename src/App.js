import React, { Component } from 'react';
import './App.css';
import Player1 from './components/Player1.js'
import Player2 from './components/Player2.js'
import Buttons from './components/Buttons.js'

class  App extends Component {
  constructor() {
      super();
      this.state = {
          user: {},
          isLogged: false,
      };        
  }
  
  render() {
  return (
    <main className="App">
      <Player1 />
      <Player2 />
      <Buttons />
    </main>
    );
  }
}

export default App;
