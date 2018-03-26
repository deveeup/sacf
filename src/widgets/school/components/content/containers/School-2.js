
import React, { Component } from 'react'
import School2View from '../components/School-2-view.js'
import InfoTools from './assets/Text-Items.json'

class School2 extends Component {
  render(){
    return(
      <School2View
        InfoTools={InfoTools.tools}
      />
    )
  }
}

export default School2

