
import React, { Component } from 'react'
import Library5View from '../components/Library-5-view.js'

class Library5 extends Component {
  render(){
    return(
      <Library5View 
        Info={this.props.Info}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default Library5

