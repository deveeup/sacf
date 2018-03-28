
import React from 'react'
import Politics1 from './content/containers/Politics-1'
import Info from './content/containers/assets/info.json'

function ContentPolitics(props){
  switch(props.ContentPolitics){
    case 'Politics-1':
      return(
        <Politics1 Info={Info.A}/>
      )
    break
  }
}

export default ContentPolitics