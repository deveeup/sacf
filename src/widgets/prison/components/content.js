
import React from 'react'
import Prison1 from './content/containers/Prison-1'
import PrisonA from './content/containers/Prison-A'
import PrisonB from './content/containers/Prison-B'
import PrisonC from './content/containers/Prison-C'
import Info from './content/containers/assets/info.json'

function ContentPrison(props){
  switch(props.ContentPrison){
    case 'Prison-1':
      return(
        <Prison1 Info={Info.clausule}/>
      )
    break
    case 'Prison-A':
      return(
        <PrisonA Info={Info.A}/>
      )
    break
    case 'Prison-B':
      return(
        <PrisonB Info={Info.B}/>
      )
    break
    case 'Prison-C':
      return(
        <PrisonC Info={Info.C}/>
      )
    break
  }
}

export default ContentPrison