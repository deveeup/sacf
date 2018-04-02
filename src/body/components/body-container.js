
import React from 'react'
import './body-container.styl'

function BodyContainer (props) {
	return(
		<div className="BodyContainer">
			{props.children}
		</div>
	)
}

export default BodyContainer