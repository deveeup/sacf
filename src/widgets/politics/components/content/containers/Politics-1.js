
import React, { Component } from 'react'
import Politics1View from '../components/Politics-1-view.js'

class Politics1 extends Component {
  render(){
    return(
      <Politics1View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Politics1

