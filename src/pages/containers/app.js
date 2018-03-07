
import React, { Component } from 'react'
import AppView from '../components/app-view'
import Header from '../../header/containers/header'
import Menu from '../../menu/containers/menu'
import Body from '../../body/containers/body'

class App extends Component {
	render(){
		return(
			<AppView>
				<Header/>
				<Menu/>
				<Body/>
			</AppView>
		)
	}
}

export default App