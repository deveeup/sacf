
import React from 'react'
import Court1 from './content/containers/Court-1'
import Court2 from './content/containers/Court-2'
import Info from './content/containers/assets/info.json'

function ContentCourt(props){
  switch(props.ContentCourt){
    case 'Court-1':
      return(
        <Court1 Info={Info.who}/>
      )
    break
    case 'Court-2':
      return(
        <Court2 Info={Info.when}/>
      )
    break
  }
}

export default ContentCourt