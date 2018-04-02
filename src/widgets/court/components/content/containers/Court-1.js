
import React, { Component } from 'react'
import Court1View from '../components/Court-1-view'

class Court1 extends Component {
  render(){
    return(
      <Court1View 
        Info={this.props.Info} 
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Court1

