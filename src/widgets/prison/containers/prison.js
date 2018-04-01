
import React, { Component } from 'react'
import PrisonView from '../components/prison-view'
import PrisonEdifice from './assets/PrisonEdifice.png'
import ListItems from './assets/list-items.json'

class Prison extends Component {
	state = {
		ContentPrison: 'Prison-1'
	}

	ClickMenuPrison = (e) => {
    e.preventDefault();
    this.setState({
      ContentPrison: e.target.id
    })
  }

  render(){
    return(
      <PrisonView
      	ListItems={ListItems}
      	PrisonEdifice={PrisonEdifice}
      	ClickMenuPrison={this.ClickMenuPrison}
      	ContentPrison={this.state.ContentPrison}
      />
    )
  }
}

export default Prison