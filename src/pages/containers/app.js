
import React, { Component } from 'react'
import AppView from '../components/app-view'
import Header from '../../header/containers/header'
import Menu from '../../menu/containers/menu'

class App extends Component {
	render(){
		return(
			<AppView>
				<Header/>
				<Menu/>
			</AppView>
		)
	}
}

export default App