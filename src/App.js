import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonState] = useState(
    {
      persons: [
        { name: 'Mayank', age: 31 },
        { name: 'Shikha', age: 30 },
        { name: 'Vinod', age: 59 },
        { name: 'Lata', age: 58 }
      ],
      otherState: 'Some Other Info'
    }
  );

  const switchNameHandler = () => {
    console.log('Button clicked!');
    // this.state.persons[0].name="Honey"; //cannot mutate state directly like this
    setPersonState({
      persons: [
        { name: 'Honey', age: 31 },
        { name: 'Chhutki', age: 30 },
        { name: 'Badde', age: 59 },
        { name: 'SnehLata', age: 58 }
      ]
    })

  }

  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Adventure Sports</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age} />
    </div>
  );
}

export default app;



