import React from 'react'

function Item (props) {
  return(
		<li>
			<a id={props.id} onClick={props.MouseClick}>
				{props.title}
			</a>
		</li>
	)
}

export default Item