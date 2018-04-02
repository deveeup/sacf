
import React, { Component } from 'react'
import Politics5View from '../components/Politics-5-view'

class Politics5 extends Component {
  render(){
    return(
      <Politics5View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Politics5
