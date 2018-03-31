
import React, { Component } from 'react'
import CourtEdifice from './assets/CourtEdifice.png'
import CourtView from '../components/court-view'
import ListItems from './assets/list-items.json'

class Court extends Component {
  state = {
    ContentCourt: 'Court-2',
  }

  ClickMenuCourt = (e) => {
    e.preventDefault();
    this.setState({
      ContentCourt: e.target.id
    })
  }

  render(){
    return(
      <CourtView
        ListItems={ListItems}
        CourtEdifice={CourtEdifice}
        ClickMenuCourt={this.ClickMenuCourt}
        ContentCourt={this.state.ContentCourt}
      />
    )
  }
} 

export default Court