
import React, { Component } from 'react'
import BodyView from '../components/body-view'
import Ciudad from '../components/assets/ciudad.gif'
import Modal from '../../modal/containers/modal'

class Body extends Component {
	state = {
		Prison: false,
		Politics: false,
		ModalActive: false,
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
		console.log(e.target.id)
	}
	CloseModal = () => {
		this.setState({
			ModalActive: false,
		})
	}
	render(){
		return(
			<div>
				<BodyView 
					Ciudad={Ciudad} 
					MouseEnter={this.MouseEnter}
					MouseLeave={this.MouseLeave}
					MouseClick={this.MouseClick}

					Prison={this.state.Prison}
					Politics={this.state.Politics}
				/>
				<Modal 
					ModalActive={this.state.ModalActive}
					CloseModal={this.CloseModal}
				/>
			</div>
		)
	}
}

export default Body