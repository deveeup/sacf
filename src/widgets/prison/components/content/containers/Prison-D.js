
import React, { Component } from 'react'
import PrisonDView from '../components/Prison-D-view.js'

class PrisonD extends Component {
  render(){
    return(
      <PrisonDView 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default PrisonD

