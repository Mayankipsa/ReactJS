import React, { Component } from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {name:'Mayank',age:31},
      {name:'Shikha',age:30},
      {name:'Vinod',age:59},
      {name:'Lata',age:58}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        {/* <button onClick={}></button> */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Adventure Sports</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
      
    );
  }
}

export default App;
