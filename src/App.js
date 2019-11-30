import React, { useState } from 'react';
import UserOutput from './component/userOutput'
import './App.css';


const App = () => {
  const [users, setUsers] = useState({
    userData: [
      {
        name: 'Name 1',
        age: 32,
        weight: 30
      },
      {
        name: 'Name 2',
        age: 27,
        weight: 35
      }
    ]
  });

  const onClickHandler = () => {
    setUsers({
      userData: [
        {
          name: 'Name 1',
          age: 32,
          weight: 68
        },
        {
          name: 'Name 3',
          age: 27,
          weight: 54
        }
      ]
    });
  }

  const onChangeHandler = (event) => {
    setUsers({
      userData: [
        {
          name: 'Name 1',
          age: 32,
          weight: 68
        },
        {
          name: event.target.value,
          age: 27,
          weight: 54
        }
      ]
    });
  }

  const { userData } = users;
  return (
    <div className="App">
      <h1>Assingment #1</h1>
      <UserOutput users={userData[0]} />
      <UserOutput users={userData[1]} click={onClickHandler} change={onChangeHandler} />
    </div>
  );
}

export default App;
