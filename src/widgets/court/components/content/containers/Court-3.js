
import React, { Component } from 'react'
import Court3View from '../components/Court-3-view'

class Court3 extends Component {
  render(){
    return(
      <Court3View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Court3

