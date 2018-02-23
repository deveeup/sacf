
import React from 'react'
import AppViewStyl from './app-view.styl'

function AppView(props){
	return(
		<div className="container">
			{props.children}
		</div>
	)
}

export default AppView