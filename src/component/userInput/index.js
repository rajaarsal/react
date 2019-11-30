import React from 'react';

const style = {
    border: '1px solid green',
    padding: '10px',
    fontSize: '17px',
    borderRadius: '5px'
}

function UserInput(props) {
    return <input type="text" value={props.value} onChange={props.change} style={style} />
}

export default UserInput;