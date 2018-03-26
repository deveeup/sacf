
import React, { Component } from 'react'
import School1View from '../components/School-1-view.js'
import InfoItems from './assets/Text-Items.json'

class School1 extends Component {
  render(){
    return(
      <School1View
        InfoItems={InfoItems}
      />
    )
  }
}

export default School1

