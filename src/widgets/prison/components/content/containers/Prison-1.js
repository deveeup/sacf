
import React, { Component } from 'react'
import Prison1View from '../components/Prison-1-view.js'

class Prison1 extends Component {
  render(){
    return(
      <Prison1View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Prison1

