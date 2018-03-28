
import React from 'react'
const Path = require('html-react-parser')

function Item (props) {
  return(
		<li>
			<a 
        id={props.id} 
        onClick={props.MouseClick}
        className="LinkMenu"
      >
				{Path(props.title)}
			</a>
		</li>
	)
}

export default Item