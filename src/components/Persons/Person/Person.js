import React, { Component } from 'react';
import './Person.css'
import Auxillary from "../../../hoc/Auxillary";
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        const style = {
            '@media (min-width:500px)': {
                width: '450px'
            }
        }
        return (
            // <div className="Person" style={style}>
            <React.Fragment>
                <p key="i1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p key="i2">{this.props.children}</p>
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}></input>
            </React.Fragment>

            // </div>
        )
    }

}

export default Person;