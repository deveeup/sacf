
import React, { Component } from 'react'
import ModalView from '../components/modal'
import Bdb from '../../widgets/bdb/containers/bdb'
import School from '../../widgets/school/containers/school'
import Prison from '../../widgets/prison/containers/prison'
import Politics from '../../widgets/politics/containers/politics'

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
        case 'Prison':
          return(
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ButtonCloseImage={ButtonCloseImage}
            >
              <Prison/>
            </ModalView>
          )
        break
        case 'Politics':
          return(
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ButtonCloseImage={ButtonCloseImage}
            >
              <Politics/>
            </ModalView>
          )
        break
      }
    }
  }
}

export default ModalContainer