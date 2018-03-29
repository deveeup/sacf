
import React from 'react'
import Court1 from './content/containers/Court-1'
import Info from './content/containers/assets/info.json'

function ContentCourt(props){
  switch(props.ContentCourt){
    case 'Court-1':
      return(
        <Court1 Info={Info.who}/>
      )
    break
  }
}

export default ContentCourt