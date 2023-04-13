import React from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import { backdrop, modal, header, content, actions } from './ErrorModal.module.css'

const ErrorModal = ({title, message, onConfirm}) => {
  return (
    <div>
      <div className={backdrop} onClick={onConfirm}></div>
      <Card className={modal}>
        <header className={header}>
          <h2>{title}</h2>
        </header>
        <div className={content}>
          <p>{message}</p>
        </div>
        <footer className={actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal