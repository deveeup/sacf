
import React, { Component } from 'react'
import FooterView from '../components/footer-view'
import Phone from './assets/icon-phone.png'
import Logo from './assets/logo-footer.jpg'
class Footer extends Component {
	render(){
		return( 
			<FooterView
        Phone={Phone}
				Logo={Logo}
			/>
		)
	}
}

export default Footer