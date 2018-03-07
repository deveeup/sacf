
import React, { Component } from 'react'
import ModalView from '../components/modal'

class ModalContainer extends Component {
	render(){
		return (
			<div>
				<ModalView 
					ModalActive={this.props.ModalActive} 
					CloseModal={this.props.CloseModal}
				/>
			</div>
		)
	}
}

export default ModalContainer