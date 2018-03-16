
import React from 'react'
import './menu.styl'
import Item from './item'

function MenuView (props){
	const menu = props.listItems.menu
	return(
		<nav className="Menu">
			<ul>
				{
					menu.map((items) => {
						return (
							<Item 
								{...items}
								key={items.id}
								id={items.id}
								MouseClick={props.MouseClick}
							/>
						)
					})
				}
			</ul>
		</nav>
	)
}
export default MenuView