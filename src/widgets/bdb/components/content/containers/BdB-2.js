
import React, { Component } from 'react'
import BdB2View from '../components/BdB-2-view'
import TextContent from './assets/BdB-2-Texts.json'
import LogoConsolidate from './assets/logo-consolidate.png'
import LogoInfo from './assets/logo-info.png'
import LogoProcess from './assets/logo-process.png'
import LogoProtection from './assets/logo-protection.png'
import LogoWarranty from './assets/logo-warranty.png'

class BdB2 extends Component {
  render(){
    return(
      <BdB2View
        TextContent={TextContent}
        LogoConsolidate={LogoConsolidate}
        LogoInfo={LogoInfo}
        LogoProcess={LogoProcess}
        LogoProtection={LogoProtection}
        LogoWarranty={LogoWarranty}
      />
    )
  }
}

export default BdB2