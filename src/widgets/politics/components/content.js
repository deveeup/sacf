
import React from 'react'
import Politics1 from './content/containers/Politics-1'
import Politics2 from './content/containers/Politics-2'
import Politics3 from './content/containers/Politics-3'
import Info from './content/containers/assets/info.json'

function ContentPolitics(props){
  switch(props.ContentPolitics){
    case 'Politics-1':
      return(
        <Politics1 Info={Info.A}/>
      )
    break
    case 'Politics-2':
      return(
        <Politics2 Info={Info.B}/>
      )
    break
    case 'Politics-3':
      return(
        <Politics3 Info={Info.C}/>
      )
    break
  }
}

export default ContentPolitics