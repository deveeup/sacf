
import React from 'react'
import './modal.styl'

function ModalView(props){
	const Visible = { visibility: 'visible', opacity: 1, height: 'auto' }
	const Hidden = { visibility: 'hidden', opacity: 0, height: 724 }
	let ModalViewConditional = Hidden
	{ props.ModalActive
		? ModalViewConditional = Visible 
		: ModalViewConditional = Hidden 
	}
	return(
		<div id="ModalContainer" className="ModalContainer" style={ModalViewConditional} onClick={props.CloseModal}>
			<div className="WindowsModal" id="WindowsModal" style={ModalViewConditional}>
				{props.children}
				<button className="CloseButton" onClick={props.CloseModal} id="ButtonClose"></button>
			</div>
		</div>
	)
}

export default ModalView