
import React, { Component } from 'react'
import { createPortal } from 'react-dom'

const Modal = document.getElementById("sacf-modal")

class ModalContainer extends Component {
	render(){
		return createPortal(<h1>this is portal!</h1>, Modal)
	}
}

export default ModalContainer