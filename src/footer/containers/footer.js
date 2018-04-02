
import React, { Component } from 'react'
import FooterView from '../components/footer-view'
import Phone from './assets/icon-phone.png'
import Logo from './assets/logo-footer.jpg'
import TextContent from './assets/texts.json'
class Footer extends Component {
	render(){
		return( 
			<FooterView
        TextContent={TextContent}
        Logo={Logo}
        Phone={Phone}
			/>
		)
	}
}

export default Footer