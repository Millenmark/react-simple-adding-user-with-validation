import React from 'react'
import Card from '../UI/Card'

const AddUser = () => {
  const addUserHandler = (e) => {
    e.preventDefault()

  }


  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" id="age" />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  )
}

export default AddUser