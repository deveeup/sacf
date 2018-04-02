
import React, { Component } from 'react'
import SchoolView from '../components/school-view'
import ListItems from './assets/School-Texts.json'
import SchoolEdifice from './assets/SchoolEdifice.png'


class School extends Component {
  state = {
    ContentSchool: 'School-1'
  }
  ClickMenuSchool = (e) => {
    e.preventDefault();
    this.setState({
      ContentSchool: e.target.id
    })
  }
  render(){
    return(
      <SchoolView
        ListItems={ListItems}
        SchoolEdifice={SchoolEdifice}
        ClickMenuSchool={this.ClickMenuSchool}
        ContentSchool={this.state.ContentSchool}
        ModalActive={this.props.ModalActive}
      />
    )
  }
}

export default School