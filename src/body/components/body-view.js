
import React from 'react'
import './body-view.styl'

function BodyView (props) {
	let Prison = { visibility: 'hidden', opacity: 0 },
			Politics = { visibility: 'hidden', opacity: 0 },
			Bank = { visibility: 'hidden', opacity: 0 }
	{
		props.Prison 
			? Prison = { visibility: 'visible', opacity: 1  } 
			: Prison = { visibility: 'hidden', opacity: 0 };

		props.Politics 
		? Politics = { visibility: 'visible', opacity: 1  } 
		: Politics = { visibility: 'hidden', opacity: 0 };

		props.Bank 
		? Bank = { visibility: 'visible', opacity: 1  } 
		: Bank = { visibility: 'hidden', opacity: 0 };
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
					<div
						className="Bank"
						id="Bank"
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
						onClick={props.MouseClick}
					>
					</div>
				</div>
				<div className="PrisonHover" style={Prison}></div>
				<div className="PoliticsHover" style={Politics}></div>
				<div className="BankHover" style={Bank}></div>
			</div>	
		</div>
	)
}

export default BodyView