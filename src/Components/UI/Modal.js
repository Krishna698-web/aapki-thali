import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'

import classes from './Modal.module.css';

const Backdrop= (props) =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlays =(props) =>{
    return (
        <Card className={classes.overlay}>
            {props.children}
        </Card>
    )
}

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.getElementById('overlays'))}
    </>
  )
}

export default Modal