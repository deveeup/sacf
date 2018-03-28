
import React, { Component } from 'react'
import BdBEdifice from './assets/BdbEdifice.png'
import BdbView from '../components/bdb-view'
import ListItems from './assets/list-items.json'

class Bdb extends Component {
  state = {
    ContentBdB: 'BdB-1',
  }

  ClickMenuBdB = (e) => {
    e.preventDefault();
    this.setState({
      ContentBdB: e.target.id
    })
  }

  render(){
    return(
      <BdbView
        BdBEdifice={BdBEdifice}
        ClickMenuBdB={this.ClickMenuBdB}
        ContentBdB={this.state.ContentBdB}
        ListItems={ListItems}
      />
    )
  }
}

export default Bdb