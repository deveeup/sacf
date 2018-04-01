
import React from 'react'
import './Prison-C.styl'

const Parse = require('html-react-parser')

function PrisonViewD (props) {
	const letter = props.Info.letter
	const title = props.Info.title
	const titleLeft = props.Info.ListLeft.title
	const titlerRight = props.Info.ListRight.title
	const itemsLeft = props.Info.ListLeft.items
	const imageLeft = props.Info.ListLeft.image
	const itemsRight = props.Info.ListRight.items
	const imageRight = props.Info.ListRight.image
	const iconRed = props.Info.ListLeft.icon
	const iconYellow= props.Info.ListRight.icon
	return(
		<div className="Prison-D">
			<div className="Top">
				<h2 className="Letter">{letter}.</h2>
				<h3 className="Title">{Parse(title)}</h3>
			</div>
			<div className="IconAndTitle">
				<div className="Left">
					<figure className="ImageLeft">
						<img src={imageLeft} />
					</figure>
					<h3 className="Title">{titleLeft}</h3>
				</div>
				<div className="Right">
					<figure className="ImageRight">
						<img src={imageRight}/>
					</figure>
					<h3 className="Title">{titlerRight}</h3>
				</div>
			</div>
			<div className="TextContent">
				<div className="LeftContent">
					<ol>
						{
							itemsLeft.map((item) => {
								return(
									<li key={item.id}>
										<img src={iconRed} />
										<p>{item.text}</p>
									</li>
								)
							})
						}
					</ol>
				</div>
				<div className="RightContent">
					<ol>
						{
							itemsRight.map((item) => {
								return(
									<li key={item.id}>
										<img src={iconYellow} />
										<p>{Parse(item.text)}</p>
									</li>
								)
							})
						}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default PrisonViewD
