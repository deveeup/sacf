
import React, { Component } from 'react'
import Prison1View from '../components/Prison-1-view.js'

class Prison1 extends Component {
  render(){
    return(
      <Prison1View Info={this.props.Info}/>
    )
  }
}

export default Prison1

