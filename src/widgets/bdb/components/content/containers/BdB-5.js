
import React, { Component } from 'react'
import BdB5View from '../components/BdB-5-view'
import TextContent from './assets/BdB-5-Texts.json'
import LogoSacf from './assets/logo-sacf.png'
class BdB5 extends Component {
  render(){
    return(
      <BdB5View
        TextContent={TextContent}
        LogoSacf={LogoSacf}
      />
    )
  }
}

export default BdB5