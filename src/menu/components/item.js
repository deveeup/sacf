
import React from 'react'
const Path = require('html-react-parser')

function Item (props) {
  const Active = {fontWeight: 'bold', borderBottomWidth: 10, borderBottomColor: 'red' }
  return props.ModalContent == props.id ?
		<li>
			<a 
        id={props.id} 
        onClick={props.MouseClick}
        className="LinkMenu"
        style={Active}
      >
				{Path(props.title)}
			</a>
		</li>
	:
    <li>
        <a 
          id={props.id} 
          onClick={props.MouseClick}
          className="LinkMenu"
        >
          {Path(props.title)}
        </a>
      </li>
}

export default Item