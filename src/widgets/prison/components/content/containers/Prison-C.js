
import React, { Component } from 'react'
import PrisonCView from '../components/Prison-C-view.js'

class PrisonC extends Component {
  render(){
    return(
      <PrisonCView 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default PrisonC

