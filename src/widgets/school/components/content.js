
import React from 'react'
import School1 from './content/containers/School-1'
import School2 from './content/containers/School-2'
import School3 from './content/containers/School-3'

function ContentSchool(props){
  switch(props.ContentSchool){
    case 'School-1':
      return(
        <School1/>
      )
    break
    case 'School-2':
      return(
          <School2/>
      )
    break
    case 'School-3':
      return(
          <School3/>
      )
    break
  }
}

export default ContentSchool