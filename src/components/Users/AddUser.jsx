import React from 'react'
import { input } from './AddUser.module.css'
import { Card, Button } from '../UI'

const AddUser = () => {
  const addUserHandler = (e) => {
    e.preventDefault()

  }


  return (
    <Card className={input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" id="age" />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser