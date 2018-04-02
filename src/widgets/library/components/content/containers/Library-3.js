
import React, { Component } from 'react'
import Library3View from '../components/Library-3-view.js'

class Library3 extends Component {
  render(){
    return(
      <Library3View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Library3

