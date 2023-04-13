import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button/Button'
import Card from '../Card/Card'
import { backdrop, modal, header, content, actions } from './ErrorModal.module.css'

const Backdrop = ({onConfirm}) => {
  return (
    <div className={backdrop} onClick={onConfirm}></div>
  )
}

const ModalOverlay = ({title, message, onConfirm}) => {
  return (
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
  )
}

const ErrorModal = ({title, message, onConfirm}) => {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(<Backdrop onConfirm={onConfirm}/>, document.getElementById('backdrop-root'))
      }
      {
        ReactDOM.createPortal(<ModalOverlay title={title} message={message} onConfirm={onConfirm}/>, document.getElementById('modal-overlay'))
      }
    </React.Fragment>
  )
}

export default ErrorModal