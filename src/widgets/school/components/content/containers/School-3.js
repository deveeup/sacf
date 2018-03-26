
import React, { Component } from 'react'
import School3View from '../components/School-3-view.js'
import InfoProgram from './assets/Text-Items.json'

class School3 extends Component {
  render(){
    return(
      <School3View
        InfoProgram={InfoProgram.program}
      />
    )
  }
}

export default School3

