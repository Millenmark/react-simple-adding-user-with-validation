import React from 'react'
import './App.css'
import { AddUser, UserList } from './components/Users'

function App() {
  const users = [
    {
      name: 'haldf',
      age: "23",
    },
    {
      name: 'haeerldf',
      age: "23",
    },
  ]

  return (
    <div className="App">
      <AddUser/>
      <UserList users={users}/>
    </div>
  )
}

export default App
