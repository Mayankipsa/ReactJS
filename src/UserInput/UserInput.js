import React from "react";
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="UserInput">
            User Input Text
            <p>User Name: {props.userName}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    );
}

export default userInput;