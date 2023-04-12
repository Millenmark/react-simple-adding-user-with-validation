import React, { useState } from 'react'
import './App.css'
import { AddUser, UserList } from './components/Users'

function App() {
  const [users, setUsers] = useState([])

  const getUsers = (userName, userAge) => {
    setUsers((prevUsers) => {
      return [...prevUsers, {name: userName, age: userAge} ]
    })
  }

  return (
    <div className="App">
      <AddUser getUsers={getUsers}/>
      <UserList users={users}/>
    </div>
  )
}

export default App
