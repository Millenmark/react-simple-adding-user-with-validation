import React, {useState, useRef} from 'react'
import { input } from './AddUser.module.css'
import { Card, Button, ErrorModal } from '../../UI'

const AddUser = ({ getUsers }) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()

    const name = nameInputRef.current.value
    const age = ageInputRef.current.value

    if (age.trim().length === 0 || name.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and (non-empty values).'
      })
      return
    }

    //the plus sign here is converting the string number into an actual number
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age! (> 0)'
      })
      return
    }
    getUsers(name, age)
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
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
          <input 
            type="text" 
            name="username" 
            id="username" 
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input 
            type="number" 
            name="age" 
            id="age"
            ref={ageInputRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser