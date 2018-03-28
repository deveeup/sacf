
import React from 'react'
import Library1 from './content/containers/Library-1'
import Info from './content/containers/assets/info.json'

function ContentLibrary(props){
  switch(props.ContentLibrary){
    case 'Library-1':
      return(
        <Library1 Info={Info.A}/>
      )
    break
  }
}

export default ContentLibrary