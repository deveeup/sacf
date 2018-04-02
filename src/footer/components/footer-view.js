
import React from 'react'
import './footer.styl'
const Parse = require('html-react-parser')

function FooterView(props) {
	return( 
		<footer className="Footer">
			<div className="Linear">
				<div className="Red"></div>
				<div className="Yellow"></div>
			</div>
			<div className="Content">
				<figure className="Left">
					<img src={props.Logo} />
				</figure>
				<div className="Right">
					<div className="Title">
						<img src={props.Phone}/>
						<p>{props.TextContent.title}</p>
					</div>
					<p className="Text">{Parse(props.TextContent.text)}</p>
				</div>
			</div>
		</footer>
	)
}

export default FooterView