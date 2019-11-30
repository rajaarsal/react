import React from 'react';
import UserInput from '../userInput';
import './UserOutput.css';

function UserOutput(props) {
    return (
        <div className="UserOutput">
            <UserInput change={props.change} value={props.users.name}/>
            <p onClick={props.click}>Name: {props.users.name}</p>
            <p>Age: {props.users.age}</p>
            <p>Weight: {props.users.weight}</p>
        </div>
    )
}

export default UserOutput;