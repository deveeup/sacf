
import React, { Component } from 'react'
import BdbView from '../components/bdb-view'
import ListItems from './list-items.json'

class Bdb extends Component {
  state = {
    ContentBdB: 'BdB-1'
  }
  ClickMenu = (e) => {
    e.preventDefault();
    this.setState({
      ContentBdB: e.target.id
    })
  }
  render(){
    return(
      <BdbView
        ListItems={ListItems}
        ClickMenu={this.ClickMenu}
        ContentBdB={this.state.ContentBdB}
      />
    )
  }
}

export default Bdb