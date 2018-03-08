
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
				- {props.ModalContent} 
				<button onClick={props.CloseModal} id="ButtonClose">
					cerrar
				</button>
			</div>
		</div>
	)
}

export default ModalView