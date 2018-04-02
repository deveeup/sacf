
import React, { Component } from 'react'
import BdB1View from '../components/BdB-1-view'

class BdB1 extends Component {
  render(){
    return(
      <BdB1View
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default BdB1