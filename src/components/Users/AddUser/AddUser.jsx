import React, {useState} from 'react'
import { input } from './AddUser.module.css'
import { Card, Button, ErrorModal } from '../../UI'

const AddUser = ({ getUsers }) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and (non-empty values).'
      })
      return
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age! (> 0)'
      })
      return
    }
    getUsers(enteredUsername, enteredAge);
    setEnteredAge('')
    setEnteredUsername('')
  }

  const usernameChangeHandler = e => {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }


  return (
    <div>
      {
        error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)
      }
      <Card className={input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" name="age" id="age" onChange={ageChangeHandler} value={enteredAge}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser