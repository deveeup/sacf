
import React, { Component } from 'react'
import ModalView from '../components/modal'

class ModalContainer extends Component {
	render(){
		return (
			<div>
				<ModalView 
					CloseModal={this.props.CloseModal}
					ModalActive={this.props.ModalActive} 
					ModalContent={this.props.ModalContent}
				/>
			</div>
		)
	}
}

export default ModalContainer