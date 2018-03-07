
import React from 'react'
import './body-view.styl'

function BodyView (props) {
	let Prison = { visibility: 'hidden', opacity: 0 }
	let Politics = { visibility: 'visible', opacity: 1 }
	{
		props.Prison 
			? Prison = { visibility: 'visible', opacity: 1  } 
			: Prison = { visibility: 'hidden', opacity: 0 };

		props.Politics 
		? Politics = { visibility: 'visible', opacity: 1  } 
		: Politics = { visibility: 'hidden', opacity: 0 };
	}
	return(
		<div className="BodyView">
			<img src={props.Ciudad} className="Ciudad" />
			<div className="Transparent">
				<div className="HandleClick">
					<div 
						className="Prison" 
						id="Prison"
						onClick={props.MouseClick}
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
					></div>
					<div
						className="Politics"
						id="Politics"
						onClick={props.MouseClick}
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
					>
					</div>
				</div>
				<div className="PrisonHover" style={Prison}></div>
				<div className="PoliticsHover" style={Politics}></div>
			</div>	
		</div>
	)
}

export default BodyView