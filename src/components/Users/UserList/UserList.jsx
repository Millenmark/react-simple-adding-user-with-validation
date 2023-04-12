import React from 'react'
import { list } from './UserList.module.css'
import { Card } from '../../UI'

const UserList = ({users}) => {
  
  return (
    <Card className={list}>
      <ul>
        {
          users.map((user, index) => (
            <li key={index}>
              {user.name} ({user.age} years old)
            </li>
          ))
        }
      </ul>
    </Card>
  )
}

export default UserList