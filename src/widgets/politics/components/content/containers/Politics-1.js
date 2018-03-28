
import React, { Component } from 'react'
import Politics1View from '../components/Politics-1-view.js'
// import InfoConcepts from './assets/Text-Items.json'

        //InfoConcepts={InfoConcepts.concepts}
class Politics1 extends Component {
  render(){
    return(
      <Politics1View Info={this.props.Info}/>
    )
  }
}

export default Politics1

