
import React from 'react'
import Info from './assets/content/info.json'
import BdB1 from './content/containers/BdB-1'
import BdB2 from './content/containers/BdB-2'
import BdB3 from './content/containers/BdB-3'
import BdB4 from './content/containers/BdB-4'
import BdB5 from './content/containers/BdB-5'

function ContentBdB(props){
  switch(props.ContentBdB){
    case 'BdB-1':
      return(
        <BdB1 Info={Info.system}/>
      )
    break
    case 'BdB-2':
      return(
        <BdB2 Info={Info.search}/>
      )
    case 'BdB-3':
      return(
        <BdB3 Info={Info.actors}/>
      )
    break
    case 'BdB-4':
      return(
        <BdB4 Info={Info.elements}/>
      )
    break
    case 'BdB-5':
      return(
        <BdB5 Info={Info.objects}/>
      )
    break
  }
}

export default ContentBdB