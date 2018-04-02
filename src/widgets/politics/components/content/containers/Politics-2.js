
import React, { Component } from 'react'
import Politics2View from '../components/Politics-2-view'

class Politics2 extends Component {
  render(){
    return(
      <Politics2View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Politics2
