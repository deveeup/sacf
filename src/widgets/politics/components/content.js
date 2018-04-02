
import React from 'react'
import Politics1 from './content/containers/Politics-1'
import Politics2 from './content/containers/Politics-2'
import Politics3 from './content/containers/Politics-3'
import Politics4 from './content/containers/Politics-4'
import Politics5 from './content/containers/Politics-5'
import Politics6 from './content/containers/Politics-6'
import Info from './content/containers/assets/info.json'

function ContentPolitics(props){
  switch(props.ContentPolitics){
    case 'Politics-1':
      return(
        <Politics1
          Info={Info.A}
          ModalActive={props.ModalActive}
        />
      )
    break
    case 'Politics-2':
      return(
        <Politics2
          Info={Info.B}
          ModalActive={props.ModalActive}
        />
      )
    break
    case 'Politics-3':
      return(
        <Politics3
          Info={Info.C}
          ModalActive={props.ModalActive}
        />
      )
    break
    case 'Politics-4':
      return(
        <Politics3
          Info={Info.D}
          ModalActive={props.ModalActive}
        />
      )
    break
    case 'Politics-5':
      return(
        <Politics3
          Info={Info.E}
          ModalActive={props.ModalActive}
        />
      )
    break
    case 'Politics-6':
      return(
        <Politics3
          Info={Info.F}
          ModalActive={props.ModalActive}
        />
      )
    break
  }
}

export default ContentPolitics