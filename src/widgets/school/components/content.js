
import React from 'react'
import School1 from './content/containers/School-1'

function ContentSchool(props){
  switch(props.ContentSchool){
    case 'School-1':
      return(
        <School1/>
      )
    break
    case 'School-2':
      return(
        <div>
          case #2
        </div>
      )
    break
  }
}

export default ContentSchool