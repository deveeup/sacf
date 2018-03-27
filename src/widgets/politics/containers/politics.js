
import React, { Component } from 'react'
import PoliticsView from '../components/politics-view'
import ListItems from './assets/Politics-Text.json'

class Politics extends Component {
  render(){
    return(
      <PoliticsView
        ListItems={ListItems}
      />
    )
  }
}

export default Politics