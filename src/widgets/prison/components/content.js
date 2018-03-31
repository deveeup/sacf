
import React from 'react'
import Prison1 from './content/containers/Prison-1'
// import Info from './content/containers/assets/info.json'

function ContentPrison(props){
  switch(props.ContentPrison){
    case 'Prison-1':
      return(
        <Prison1/>
      )
    break
  }
}

export default ContentPrison