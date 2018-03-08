
import React, { Component } from 'react'
import BodyView from '../components/body-view'
import Ciudad from '../components/assets/ciudad.gif'
import Modal from '../../modal/containers/modal'

class Body extends Component {
	state = {
		Bank: false,
		Library: false,
		ModalActive: false,
		Politics: false,
		Prison: false,
		ModalContent: '',
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
			case 'Bank':
				this.setState({
					Bank: true,
				})
			break;
			case 'Library':
				this.setState({
					Library: true,
				})
			break;
		}
	}
	MouseLeave = (e) => {
		if (this.state.ModalActive) {
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
				case 'Bank':
					this.setState({
						Bank: true,
					})
				break;
				case 'Library':
					this.setState({
						Library: true,
					})
				break;
			}
		}	else {
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
				case 'Bank':
					this.setState({
						Bank: false,
					})
				break;
				case 'Library':
					this.setState({
						Library: false,
					})
				break;
			}
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
			case 'Bank':
				this.setState({
					ModalContent: 'Bank',
					Bank: true,
				})
			break;
			case 'Library':
				this.setState({
					ModalContent: 'Library',
				})
			break;
		}

	}
	CloseModal = (e) => {
		if(e.target.id == 'ModalContainer' || 'ButtonClose') {
			this.setState({
				ModalActive: false,
				Bank: false,
				Library: false,
				ModalActive: false,
				Politics: false,
				Prison: false,
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

					Bank={this.state.Bank}
					Library={this.state.Library}
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