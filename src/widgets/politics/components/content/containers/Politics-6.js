
import React, { Component } from 'react'
import Politics6View from '../components/Politics-6-view'

class Politics6 extends Component {
  render(){
    return(
      <Politics6View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Politics6
