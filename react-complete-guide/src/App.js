import React, { Component } from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  state 
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={}></button>
        <Person name="mayank" age="31">My Hobbies: Adventure Sports</Person>
        <Person name="shikha" age="30"/>
        <Person name="lata" age="58"/>
        <Person name="vinod" age="59"/>
      </div>
      
    );
  }
}

export default App;
