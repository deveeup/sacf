
import React from 'react'
import './menu.styl'
import Item from './item'

function MenuView (props){
	const menu = props.ListItems.menu
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
								ModalContent={props.ModalContent}
							/>
						)
					})
				}
			</ul>
		</nav>
	)
}
export default MenuView