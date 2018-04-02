
import React, { Component } from 'react'
import FooterView from '../components/footer-view'
import Phone from './assets/icon-phone.png'
class Footer extends Component {
	render(){
		return( 
			<FooterView
				Phone={Phone}
			/>
		)
	}
}

export default Footer