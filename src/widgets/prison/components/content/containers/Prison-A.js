
import React, { Component } from 'react'
import PrisonAView from '../components/Prison-A-view.js'

class PrisonA extends Component {
  render(){
    return(
      <PrisonAView 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />

    )
  }
}

export default PrisonA

