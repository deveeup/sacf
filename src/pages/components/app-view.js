
import React from 'react'
import './app-view.styl'

function AppView(props){
	return(
		<div className="AppContainer">
			{props.children}
		</div>
	)
}

export default AppView