
import React, { Component } from 'react'
import Library4View from '../components/Library-4-view.js'

class Library4 extends Component {
  render(){
    return(
      <Library4View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Library4

