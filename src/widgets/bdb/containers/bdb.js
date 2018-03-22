
import React, { Component } from 'react'
import BdbView from '../components/bdb-view'
import ListItems from './list-items.json'

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
        ListItems={ListItems}
        ClickMenuBdB={this.ClickMenuBdB}
        ContentBdB={this.state.ContentBdB}
        BdB2Bold={this.state.BdB2Bold}
      />
    )
  }
}

export default Bdb