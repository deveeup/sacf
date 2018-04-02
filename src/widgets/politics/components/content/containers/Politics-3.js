
import React, { Component } from 'react'
import Politics3View from '../components/Politics-3-view'

class Politics3 extends Component {
  render(){
    return(
      <Politics3View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Politics3
