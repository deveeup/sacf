
import React, { Component } from 'react'
import PrisonBView from '../components/Prison-B-view.js'

class PrisonB extends Component {
  render(){
    return(
      <PrisonBView Info={this.props.Info}/>
    )
  }
}

export default PrisonB

