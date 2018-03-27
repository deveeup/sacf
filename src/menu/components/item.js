
import React from 'react'
const Path = require('html-react-parser')

function Item (props) {
  return(
		<li>
			<a id={props.id} onClick={props.MouseClick}>
				{Path(props.title)}
			</a>
		</li>
	)
}

export default Item