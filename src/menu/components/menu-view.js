
import React from 'react'
import './menu.styl'

function MenuView (props){
	const menu = props.listItems.menu
	return(
		<nav className="Menu">
			<ul>
				{
					menu.map((item) => {
						return console.log(item.item)
					})
				}
			</ul>
		</nav>
	)
}
export default MenuView