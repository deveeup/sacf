import React from 'react'

function Item (props) {
	return(
		<li>
			<a href="#">
				{props.title}
			</a>
		</li>
	)
}

export default Item