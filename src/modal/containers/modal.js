
import React, { Component } from 'react'
import ModalView from '../components/modal'
import Bdb from '../../widgets/bdb/containers/bdb'

import ButtonCloseImage from '../components/assets/ButtonClose.svg'

class ModalContainer extends Component {
  render(){
    console.log(this.props.ModalContent)
    {
      switch(this.props.ModalContent){
        case 'undefined':
          return(
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ButtonCloseImage={ButtonCloseImage}
            >
              asd
            </ModalView>
          )
        break 
        default:
          return( 
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ButtonCloseImage={ButtonCloseImage}
            >
              Ninguno!
            </ModalView>
          )
      }
    }
  }
}

export default ModalContainer