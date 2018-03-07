
import React, { Component } from 'react'
import BodyView from '../components/body-view'
import Ciudad from '../components/assets/ciudad.gif'
import Modal from '../../modal/containers/modal'

class Body extends Component {
	state = {
		ModalActive: false,
		ModalContent: '',
		Politics: false,
		Prison: false,
	}
	MouseEnter = (e) => {
		switch(e.target.id) {
			case 'Prison':
			this.setState({
				Prison: true,
			})
			break;
			case 'Politics':
			this.setState({
				Politics: true,
			})
			break;
		}
	}
	MouseLeave = (e) => {
		switch(e.target.id) {
			case 'Prison':
			this.setState({
				Prison: false,
			})
			break;
			case 'Politics':
			this.setState({
				Politics: false,
			})
			break;
		}
	}
	MouseClick = (e) => {
		this.setState({
			ModalActive: true,
		})
		switch(e.target.id) {
			case 'Prison':
			this.setState({
				ModalContent: 'Prisión',
			})
			break;
			case 'Politics':
			this.setState({
				ModalContent: 'Alcaldía',
			})
			break;
		}

	}
	CloseModal = (e) => {
		if(e.target.id == 'ModalContainer' || 'ButtonClose') {
			this.setState({
				ModalActive: false,
			})
		}
		if (e.target.id == ''){
			this.setState({
				ModalActive: true,
			})
		}
	}
	render(){
		return(
			<div>
				<BodyView 
					Ciudad={Ciudad} 
					MouseClick={this.MouseClick}
					MouseEnter={this.MouseEnter}
					MouseLeave={this.MouseLeave}

					Politics={this.state.Politics}
					Prison={this.state.Prison}
				/>
				<Modal 
					CloseModal={this.CloseModal}
					ModalActive={this.state.ModalActive}
					ModalContent={this.state.ModalContent}
				/>
			</div>
		)
	}
}

export default Body