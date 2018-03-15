
import React from 'react'
import './modal.styl'

function ModalView(props){
	const Visible = { visibility: 'visible', opacity: 1  }
	const Hidden = { visibility: 'hidden', opacity: 0 }
	let ModalViewConditional = Hidden
	{ props.ModalActive
		? ModalViewConditional = Visible 
		: ModalViewConditional = Hidden 
	}
	return(
		<div id="ModalContainer" className="ModalContainer" style={ModalViewConditional} onClick={props.CloseModal}>
			<div className="WindowsModal">
				{props.children}
				<button className="CloseButton" onClick={props.CloseModal} id="ButtonClose"></button>
			</div>
		</div>
	)
}

export default ModalView