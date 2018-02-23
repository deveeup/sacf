
import React from 'react'
import './menu.styl'

function MenuView (props){
	const menu = props.text.menu
	return(
		<nav className="Menu">
			<ul>
				{	
						menu.map(function(i) {
							console.log('LEL');
						})	
				}
			</ul>
		</nav>
	)
}
export default MenuView