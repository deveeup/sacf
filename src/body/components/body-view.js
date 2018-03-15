
import React from 'react'
import './body-view.styl'

function BodyView (props) {
	let Bank, Court, Library, Politics, Prison, School = Hidden
	let background
	const Visible = {visibility: 'visible', opacity: 1}
	const Hidden = {visibility: 'hidden', opacity: 0}

	props.ModalActive 
		? background = props.CityStatic
		: background = props.CityAnimate
	{
		props.Bank ? Bank = Visible : Bank = Hidden
		props.Court ? Court = Visible : Court = Hidden
		props.Library ? Library = Visible : Library = Hidden
		props.Politics ? Politics = Visible : Politics = Hidden
		props.Prison ? Prison = Visible : Prison = Hidden
		props.School ? School = Visible : School = Hidden
	}
	return(
		<div className="BodyView">
			<img src={background} className="Ciudad"/>
			<div className="Transparent">
				<div className="HandleClick">
					<div
						id="Bank"
						className="Bank"
						onClick={props.MouseClick}
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
					></div>
					<div
						id="Court"
						className="Court"
						onClick={props.MouseClick}
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
					></div>
					<div
						id="Library"
						className="Library"
						onClick={props.MouseClick}
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
					></div>
					<div
						id="Politics"
						className="Politics"
						onClick={props.MouseClick}
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
					></div>
					<div 
						id="Prison"
						className="Prison" 
						onClick={props.MouseClick}
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
					></div>
					<div 
						id="School"
						className="School" 
						onClick={props.MouseClick}
						onMouseEnter={props.MouseEnter}
						onMouseLeave={props.MouseLeave}
					></div>
				</div>
				<div className="BankHover" style={Bank}></div>
				<div className="CourtHover" style={Court}></div>
				<div className="LibraryHover" style={Library}></div>
				<div className="PoliticsHover" style={Politics}></div>
				<div className="PrisonHover" style={Prison}></div>
				<div className="SchoolHover" style={School}></div>
			</div>	
		</div>
	)
}

export default BodyView