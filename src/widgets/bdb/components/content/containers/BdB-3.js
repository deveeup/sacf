
import React, { Component } from 'react'
import BdB3View from '../components/BdB-3-view'
import TextContent from './assets/BdB-3-Texts.json'
import IconActors from './assets/icon-actors.png'
import IconBefore from './assets/icon-list.jpg'

class BdB3 extends Component {
  render(){
    return(
      <BdB3View
        IconActors={IconActors}
        IconBefore={IconBefore}
        TextContent={TextContent}
      />
    )
  }
}

export default BdB3