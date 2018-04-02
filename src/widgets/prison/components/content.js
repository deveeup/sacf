
import React from 'react'
import Prison1 from './content/containers/Prison-1'
import PrisonA from './content/containers/Prison-A'
import PrisonB from './content/containers/Prison-B'
import PrisonC from './content/containers/Prison-C'
import PrisonD from './content/containers/Prison-D'
import Info from './content/containers/assets/info.json'

function ContentPrison(props){
  switch(props.ContentPrison){
    case 'Prison-1':
      return(
        <Prison1 Info={Info.clausule} ModalActive={props.ModalActive}/>
      )
    break
    case 'Prison-A':
      return(
        <PrisonA Info={Info.A} ModalActive={props.ModalActive}/>
      )
    break
    case 'Prison-B':
      return(
        <PrisonB Info={Info.B} ModalActive={props.ModalActive}/>
      )
    break
    case 'Prison-C':
      return(
        <PrisonC Info={Info.C} ModalActive={props.ModalActive}/>
      )
    break
    case 'Prison-D':
      return(
        <PrisonC Info={Info.D} ModalActive={props.ModalActive}/>
      )
    break
  }
}

export default ContentPrison