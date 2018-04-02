
import React, { Component } from 'react'
import BdB3View from '../components/BdB-3-view'

class BdB3 extends Component {
  render(){
    return(
      <BdB3View
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default BdB3