import React from "react";
import "./Cockpit.css";

const cockpit = (props) => {

    // if (props.showPersons) {
    //     assignedClasses = 'red';
    // }
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push('red');
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }

    }
    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );

}

export default cockpit;

