
import React from 'react'
import './header.styl'

function HeaderView(props) {
	return( 
		<header className="Header">
			<img src={props.urlImg} alt={props.altImg}/>
		</header>
	)
}

export default HeaderView