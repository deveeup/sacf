
import React, { Component } from 'react'
import MenuView from '../components/menu-view'
import MenuItems from './menu-items.json'
class Menu extends Component {
	render(){
		return(
			<MenuView
				listItems={MenuItems}
			/>
		)
	}
}

export default Menu