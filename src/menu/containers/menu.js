
import React, { Component } from 'react'
import MenuView from '../components/menu-view'

class Menu extends Component {
	render(){
		return(
			<MenuView
				ListItems={this.props.ListItems}
        MouseClick={this.props.MouseClick}
			/>
		)
	}
}

export default Menu