import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    str: "",
    strLength:0,
    otherState: 'some other value',
    userName: "Mayank",
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({
      showPersons: !doesShowPersons
    })
  }

  // stringChangedHandler = (event) => {
  //   const str = event.target.value;
  //   console.log(str.length);
  //   this.setState({
  //     str:str,
  //     strLength: str.length
  //   });
  // }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* <input type="text" onChange={(event) => this.stringChangedHandler(event)}></input> */}

        {/* <p>String Length:{this.state.strLength}</p>
        <p>String:{this.state.str}</p> */}

        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>

        {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
