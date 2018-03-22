
import React, { Component } from 'react'
import BdB2View from '../components/BdB-2-view'
import TextContent from './assets/BdB-2-Texts.json'

class BdB1 extends Component {
  render(){
    return(
      <BdB2View
        TextContent={TextContent}
      />
    )
  }
}

export default BdB1