import React from 'react'
import './App.css'
import { AddUser, UserList } from './components/Users'

function App() {

  return (
    <div className="App">
      <AddUser/>
      <UserList/>
    </div>
  )
}

export default App
