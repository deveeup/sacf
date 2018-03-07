
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
		<div className="ModalContainer" style={ModalViewConditional}>
			<div className="WindowsModal">
				Windows Modal 
				<button onClick={props.CloseModal}>
					cerrar
				</button>
			</div>
		</div>
	)
}

export default ModalView