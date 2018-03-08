
import React, { Component } from 'react'
import BodyView from '../components/body-view'
import Ciudad from '../components/assets/ciudad.gif'
import Modal from '../../modal/containers/modal'

class Body extends Component {
	state = {
		Bank: false,
		Court: false,
		Library: false,
		Politics: false,
		Prison: false,
		School: false,
		ModalActive: false,
		ModalContent: '',
	}
	MouseEnter = (e) => {
		switch(e.target.id) {
			case 'Bank':
				this.setState({
					Bank: true,
				})
			break;
			case 'Court':
				this.setState({
					Court: true,
				})
			break;
			case 'Library':
				this.setState({
					Library: true,
				})
			break;
			case 'Politics':
				this.setState({
					Politics: true,
				})
			break;
			case 'Prison':
				this.setState({
					Prison: true,
				})
			break;
			case 'School':
				this.setState({
					School: true,
				})
			break;
		}
	}
	MouseLeave = (e) => {
		if (this.state.ModalActive) {
			switch(e.target.id) {
				case 'Bank':
					this.setState({
						Bank: true,
					})
				break;
				case 'Court':
					this.setState({
						Court: true,
					})
				break;
				case 'Library':
					this.setState({
						Library: true,
					})
				break;
				case 'Politics':
					this.setState({
						Politics: true,
					})
				break;
				case 'Prison':
					this.setState({
						Prison: true,
					})
				break;
				case 'School':
					this.setState({
						School: true,
					})
				break;
			}
		}	else {
	 		switch(e.target.id) {
				case 'Bank':
					this.setState({
						Bank: false,
					})
				break;
				case 'Court':
					this.setState({
						Court: false,
					})
				break;
				case 'Library':
					this.setState({
						Library: false,
					})
				break;
				case 'Politics':
					this.setState({
						Politics: false,
					})
				break;
				case 'Prison':
					this.setState({
						Prison: false,
					})
				break;
				case 'School':
					this.setState({
						School: false,
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
			case 'Bank':
				this.setState({
					ModalContent: 'Bank',
					Bank: true,
				})
			break;
			case 'Court':
				this.setState({
					ModalContent: 'Juzgado',
					Court: true,
				})
			break;
			case 'Library':
				this.setState({
					ModalContent: 'Library',
					Library: true
				})
			break;
			case 'Politics':
				this.setState({
					ModalContent: 'Alcaldía',
					Politics: true,

				})
			break;
			case 'Prison':
				this.setState({
					ModalContent: 'Prisión',
					Prison: true,
				})
			break;
			case 'School':
				this.setState({
					ModalContent: 'Escuela',
					Scool: true,
				})
			break;
		}
	}
	CloseModal = (e) => {
		if(e.target.id == 'ModalContainer' || 'ButtonClose') {
			this.setState({
				Bank: false,
				Court: false,
				Library: false,
				Politics: false,
				Prison: false,
				School: false,
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

					Bank={this.state.Bank}
					Court={this.state.Court}
					Library={this.state.Library}
					Politics={this.state.Politics}
					Prison={this.state.Prison}
					School={this.state.School}
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

