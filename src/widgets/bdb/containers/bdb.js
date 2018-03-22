
import React, { Component } from 'react'
import BdbView from '../components/bdb-view'
import ListItems from './list-items.json'

class Bdb extends Component {
  ClickMenu = (e) => {
    console.log(e.target.id)
    e.preventDefault();
  }
  render(){
    return(
      <BdbView
        ListItems={ListItems}
        ClickMenu={this.ClickMenu}
      />
    )
  }
}

export default Bdb