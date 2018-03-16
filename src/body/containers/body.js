
import React, { Component } from 'react'
import BodyView from '../components/body-view'
import CityAnimate from '../components/assets/ciudad.gif'
import CityStatic from '../components/assets/ciudad.jpg'
import Modal from '../../modal/containers/modal'

class Body extends Component {
	render(){
		return(
			<div>
				<BodyView 
					CityAnimate={CityAnimate} 
					CityStatic={CityStatic} 
					MouseClick={this.props.MouseClick}
					MouseEnter={this.props.MouseEnter}
					MouseLeave={this.props.MouseLeave}
					ModalActive={this.props.ModalActive}

					Bank={this.props.Bank}
					Court={this.props.Court}
					Library={this.props.Library}
					Politics={this.props.Politics}
					Prison={this.props.Prison}
					School={this.props.School}
				/>
				<Modal 
					CloseModal={this.props.CloseModal}
					ModalActive={this.props.ModalActive}
					ModalContent={this.props.ModalContent}
				/>
			</div>
		)
	}
}
export default Body

