
import React, { Component } from 'react'
import ModalView from '../components/modal'
import Bdb from '../../widgets/bdb/containers/bdb'
import School from '../../widgets/school/containers/school'
import Prison from '../../widgets/prison/containers/prison'
import Politics from '../../widgets/politics/containers/politics'
import Library from '../../widgets/library/containers/library'
import Court from '../../widgets/court/containers/court'

import ButtonCloseImage from '../components/assets/ButtonClose.svg'

class ModalContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
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
              <Bdb ModalActive={this.props.ModalActive}/>
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
        case 'Library':
          return(
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ButtonCloseImage={ButtonCloseImage}
            >
              <Library/>
            </ModalView>
          )
        break
        case 'Court':
          return(
            <ModalView 
              CloseModal={this.props.CloseModal}
              ModalActive={this.props.ModalActive}
              ButtonCloseImage={ButtonCloseImage}
            >
              <Court ModalActive={this.props.ModalActive}/>
            </ModalView>
          )
        break
      }
    }
  }
}

export default ModalContainer