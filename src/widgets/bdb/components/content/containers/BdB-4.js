
import React, { Component } from 'react'
import BdB4View from '../components/BdB-4-view'

class BdB4 extends Component {
  render(){
    return(
      <BdB4View
        Info={this.props.Info}
      />
    )
  }
}

export default BdB4