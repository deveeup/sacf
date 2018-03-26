
import React, { Component } from 'react'
import ModalView from '../components/modal'
import Bdb from '../../widgets/bdb/containers/bdb'
import School from '../../widgets/school/containers/school'

import ButtonCloseImage from '../components/assets/ButtonClose.svg'

class ModalContainer extends Component {
  render(){
    {
      switch(this.props.ModalContent){
        case 'Bank':
          return(
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ButtonCloseImage={ButtonCloseImage}
            >
              <Bdb/>
            </ModalView>
          )
        break
        case 'School':
          return(
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ButtonCloseImage={ButtonCloseImage}
            >
              <School/>
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