
import React, { Component } from 'react'
import BodyView from '../components/body-view'
import Ciudad from '../components/assets/ciudad.gif'

class Body extends Component {
	render(){
		return(
			<BodyView 
				ciudad={Ciudad} 
			/>
		)
	}
}

export default Body