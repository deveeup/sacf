import React from 'react'

function Item (props) {
	return(
		<li>
			<a>
				{props.title}
			</a>
		</li>
	)
}

export default Item