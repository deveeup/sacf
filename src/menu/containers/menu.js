
import React, { Component } from 'react'
import MenuView from '../components/menu-view'
import MenuItems from './menu-items.json'
class Menu extends Component {
	render(){
		return(
			<MenuView
				text={MenuItems}
			/>
		)
	}
}

export default Menu