
import React, { Component } from 'react'
import Politics4View from '../components/Politics-4-view'

class Politics4 extends Component {
  render(){
    return(
      <Politics4View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Politics4
