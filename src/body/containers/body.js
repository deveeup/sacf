
import React, { Component } from 'react'
import BodyView from '../components/body-view'
import Ciudad from '../components/assets/ciudad.gif'

class Body extends Component {
	state = {
		PrisonToggle: false,
	}
	PrisonMouseEnter = () => {
		this.setState({
			PrisonToggle: true,
		})
	}
	PrisonMouseLeave = () => {
		this.setState({
			PrisonToggle: false,
		})
	}
	PrisonMouseClick = () => {
		alert("click!")
	}
	render(){
		return(
			<BodyView 
				ciudad={Ciudad} 
				PrisonMouseEnter={this.PrisonMouseEnter}
				PrisonMouseLeave={this.PrisonMouseLeave}
				PrisonMouseClick={this.PrisonMouseClick}
				PrisonToggle={this.state.PrisonToggle}
			/>
		)
	}
}

export default Body