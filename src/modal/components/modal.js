
import React from 'react'
import './modal.styl'

function ModalView(props){
	let ModalViewConditional = { visibility: 'hidden', opacity: 0 }
	{
		props.ModalActive
		? ModalViewConditional = { visibility: 'visible', opacity: 1 }
		: ModalViewConditional =  { visibility: 'hidden', opacity: 0 }
	}
	return(
		<div id="ModalContainer" className="ModalContainer" style={ModalViewConditional} onClick={props.CloseModal}>
			<div className="WindowsModal">
				- {props.ModalContent} 
				<button onClick={props.CloseModal} id="ButtonClose">
					cerrar
				</button>
			</div>
		</div>
	)
}

export default ModalView