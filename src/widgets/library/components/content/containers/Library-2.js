
import React, { Component } from 'react'
import Library2View from '../components/Library-2-view.js'

class Library2 extends Component {
  render(){
    return(
      <Library2View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Library2

