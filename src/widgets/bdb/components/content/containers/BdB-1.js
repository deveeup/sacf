
import React, { Component } from 'react'
import BdB1View from '../components/BdB-1-view'
import LogoFinance from './assets/logo-finance.png'
import TextContent from './assets/BdB-1-Texts.json'

class BdB1 extends Component {
  render(){
    return(
      <BdB1View
        Image={LogoFinance}
        TextContent={TextContent}
      />
    )
  }
}

export default BdB1