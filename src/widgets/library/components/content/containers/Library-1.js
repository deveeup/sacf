
import React, { Component } from 'react'
import Library1View from '../components/Library-1-view.js'

class Library1 extends Component {
  render(){
    return(
      <Library1View Info={this.props.Info}/>
    )
  }
}

export default Library1

