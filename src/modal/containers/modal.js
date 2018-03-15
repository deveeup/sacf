
import React, { Component } from 'react'
import ModalView from '../components/modal'
import Bdb from '../../widgets/bdb/containers/bdb'

import ButtonCloseImage from '../components/assets/ButtonClose.svg'

class ModalContainer extends Component {
  componentWillReceiveProps() {
  }
  render(){
    {
      switch(this.props.ModalContent){
        case 'Bank':
          return(
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ModalContent={this.props.ModalContent}
              ButtonCloseImage={ButtonCloseImage}
            >
              <Bdb/>
            </ModalView>
          )
        break 
        default:
          return( 
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ModalContent={this.props.ModalContent}
              ButtonCloseImage={ButtonCloseImage}
            >

            </ModalView>
          )
      }
    }
  }
}

export default ModalContainer