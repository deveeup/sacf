
import React, { Component } from 'react'
import BdB5View from '../components/BdB-5-view'

class BdB5 extends Component {
  render(){
    return(
      <BdB5View
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default BdB5