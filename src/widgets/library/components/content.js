
import React from 'react'
import Library1 from './content/containers/Library-1'
import Library2 from './content/containers/Library-2'
import Library3 from './content/containers/Library-3'
import Info from './content/containers/assets/info.json'

function ContentLibrary(props){
  switch(props.ContentLibrary){
    case 'Library-1':
      return(
        <Library1 Info={Info.content}/>
      )
    break
    case 'Library-2':
      return(
        <Library2 Info={Info.A}/>
      )
    break
    case 'Library-3':
      return(
        <Library3 Info={Info.B}/>
      )
    break
  }
}

export default ContentLibrary