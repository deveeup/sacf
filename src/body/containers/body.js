
import React, { Component } from 'react'
import BodyView from '../components/body-view'
import BodyContainer from '../components/body-container'
import CityAnimate from '../components/assets/ciudad.gif'
import CityStatic from '../components/assets/ciudad.jpg'
import Modal from '../../modal/containers/modal'

class Body extends Component {
	render(){
		return(
			<BodyContainer>
				<BodyView 
					CityAnimate={CityAnimate} 
					CityStatic={CityStatic} 
					MouseClick={this.props.MouseClick}
					MouseEnter={this.props.MouseEnter}
					MouseLeave={this.props.MouseLeave}
					ModalActive={this.props.ModalActive}

					Bank={this.props.Bank}
					BankHover={this.props.BankHover}
					Court={this.props.Court}
					CourtHover={this.props.CourtHover}
					Library={this.props.Library}
					LibraryHover={this.props.LibraryHover}
					Politics={this.props.Politics}
					PoliticsHover={this.props.PoliticsHover}
					Prison={this.props.Prison}
					PrisonHover={this.props.PrisonHover}
					School={this.props.School}
					SchoolHover={this.props.SchoolHover}
				/>
				<Modal 
					CloseModal={this.props.CloseModal}
					ModalActive={this.props.ModalActive}
					ModalContent={this.props.ModalContent}
					handleKeyDown={this.props.handleKeyDown}
				/>
			</BodyContainer>
		)
	}
}
export default Body

