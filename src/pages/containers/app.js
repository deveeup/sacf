
import React, { Component } from 'react'
import AppView from '../components/app-view'
import Header from '../../header/containers/header'
import Menu from '../../menu/containers/menu'
import Body from '../../body/containers/body'
import Modal from '../../modal/containers/modal'

class App extends Component {
	render(){
		return(
			<AppView>
				<Header/>
				<Menu/>
				<Body/>
				<Modal/>
			</AppView>
		)
	}
}

export default App