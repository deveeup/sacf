
import React, { Component } from 'react'
import HeaderView from '../components/header-view'
import LogoBDB from './assets/imgHeader.jpg'
class Header extends Component {
	render(){
		return( 
			<HeaderView
				urlImg={LogoBDB}
				altImg="Banco de Bogotá - Grupo Aval"
			/>
		)
	}
}

export default Header