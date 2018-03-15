
import React, { Component } from 'react'
import MenuView from '../components/menu-view'

class Menu extends Component {
	render(){
		return(
			<MenuView
				listItems={this.props.listItems}
			/>
		)
	}
}

export default Menu