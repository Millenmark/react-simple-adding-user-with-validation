import React, {useState} from 'react'
import { input } from './AddUser.module.css'
import { Card, Button } from '../UI'

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (e) => {
    e.preventDefault()
    console.log(enteredUsername, enteredAge);
    setEnteredAge('')
    setEnteredUsername('')
  }

  const usernameChangeHandler = e => {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value)
  }


  return (
    <Card className={input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" id="age" onChange={ageChangeHandler} value={enteredAge}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser