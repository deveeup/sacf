
import React, { Component } from 'react'
import BdB2View from '../components/BdB-2-view'

class BdB2 extends Component {
  render(){
    return(
      <BdB2View
        Info={this.props.Info}
      />
    )
  }
}

export default BdB2