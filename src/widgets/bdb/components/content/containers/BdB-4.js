
import React, { Component } from 'react'
import BdB4View from '../components/BdB-4-view'
import TextContent from './assets/BdB-4-Texts.json'

import LogoPolitics from './assets/logo-politics.png'
import LogoMethods from './assets/logo-method.png'
import LogoDocument from './assets/logo-document.png'
import LogoStructure from './assets/logo-structure.png'
import LogoTraining from './assets/logo-training.png'
import LogoSaveMoney from './assets/logo-saveMoney.png'
import LogoCash from './assets/logo-cash.png'

class BdB4 extends Component {
  render(){
    return(
      <BdB4View
        TextContent={TextContent}
        LogoPolitics={LogoPolitics}
        LogoMethods={LogoMethods}
        LogoDocument={LogoDocument}
        LogoStructure={LogoStructure}
        LogoTraining={LogoTraining}
        LogoSaveMoney={LogoSaveMoney}
        LogoCash={LogoCash}
      />
    )
  }
}

export default BdB4