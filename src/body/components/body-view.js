
import React from 'react'
import './body-view.styl'

function BodyView (props) {
	let PrisonToggle = { visibility: 'hidden', opacity: 0 }
	{
		props.PrisonToggle 
		? PrisonToggle = { visibility: 'visible', opacity: 1  }
		: PrisonToggle = { visibility: 'hidden', opacity: 0 }
	}
	return(
		<div className="BodyView">
			<img src={props.ciudad} className="Ciudad" />
			<div className="Transparent">
				<div className="HandleClick">
					<div 
						className="Prison" 
						onMouseEnter={props.PrisonMouseEnter}
						onMouseLeave={props.PrisonMouseLeave}
						onClick={props.PrisonMouseClick}
					></div>
				</div>
				<div className="PrisonHover" style={PrisonToggle}></div>
			</div>	
		</div>
	)
}

export default BodyView