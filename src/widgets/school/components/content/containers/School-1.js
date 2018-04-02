
import React, { Component } from 'react'
import School1View from '../components/School-1-view.js'
import InfoConcepts from './assets/Text-Items.json'

class School1 extends Component {
  render(){
    return(
      <School1View
        InfoConcepts={InfoConcepts.concepts}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default School1

