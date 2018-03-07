
import React from 'react'
import './body-view.styl'

function BodyView (props) {
	return(
		<div className="BodyView">
			<img src={props.ciudad} className="Ciudad" />
			<div className="Transparent">
				<div className="HandleClick">
					<div className="Prison"></div>
				</div>
				<div className="PrisonHover"></div>
			</div>	
		</div>
	)
}

export default BodyView