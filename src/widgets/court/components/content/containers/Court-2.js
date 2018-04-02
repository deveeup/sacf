
import React, { Component } from 'react'
import Court2View from '../components/Court-2-view'

class Court2 extends Component {
  render(){
    return(
      <Court2View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Court2

