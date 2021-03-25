import React, { useEffect } from "react";
import "./Cockpit.css";

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect.');
        //fake http request
        // const timer = 
        setTimeout(() => {
            alert('persons changed, Save data to cloud');
        }, 1000);

        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] clean up work in useEffect');
        };
    }
        // , []
        , [props.persons]
    );

    useEffect(() => {
        console.log('[Cockpit.js] 2nd  useEffect.');

        return () => {
            console.log('[Cockpit.js] clean up work in useEffect');
        };
    });
    // if (props.showPersons) {
    //     assignedClasses = 'red';
    // }
    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push('red');
    }
    if (props.personsLength <= 1) {
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

export default React.memo(cockpit);

