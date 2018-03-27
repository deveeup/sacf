
import React, { Component } from 'react'
import BdB1View from '../components/BdB-1-view'
import Info from './assets/info.json'

class BdB1 extends Component {
  render(){
    return(
      <BdB1View
        Info={Info.system}
      />
    )
  }
}

export default BdB1