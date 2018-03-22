
import React, { Component } from 'react'
import BdbView from '../components/bdb-view'
import ListItems from './list-items.json'

class Bdb extends Component {
  render(){
    return(
      <BdbView
        ListItems={ListItems}
      />
    )
  }
}

export default Bdb