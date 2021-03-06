
import React, { Component } from 'react'
import AppView from '../components/app-view'
import Header from '../../header/containers/header'
import Menu from '../../menu/containers/menu'
import Footer from '../../footer/containers/footer'
import Menuitems from '../../menu/containers/menu-items.json'
import Body from '../../body/containers/body'

const { detect } = require('detect-browser');
const browser = detect();

class App extends Component {
  state = {
    Bank: false,
    BankHover: false,
    Court: false,
    CourtHover: false,
    Library: false,
    LibraryHover: false,
    Politics: false,
    PoliticsHover: false,
    Prison: false,
    PrisonHover: false,
    School: false,
    SchoolHover: false,
    ModalActive: false,
    ModalContent: '',
  }
  MouseEnter = (e) => {
    switch(e.target.id) {
      case 'Bank':
        this.setState({
          BankHover: true,
        })
      break;
      case 'Court':
        this.setState({
          CourtHover: true,
        })
      break;
      case 'Library':
        this.setState({
          LibraryHover: true,
        })
      break;
      case 'Politics':
        this.setState({
          PoliticsHover: true,
        })
      break;
      case 'Prison':
        this.setState({
          PrisonHover: true,
        })
      break;
      case 'School':
        this.setState({
          SchoolHover: true,
        })
      break;
    }
  }
  MouseLeave = (e) => {
    if (this.state.ModalActive) {
      switch(e.target.id) {
        case 'Bank':
          this.setState({
            Bank: true,
          })
        break;
        case 'Court':
          this.setState({
            Court: true,
          })
        break;
        case 'Library':
          this.setState({
            Library: true,
          })
        break;
        case 'Politics':
          this.setState({
            Politics: true,
          })
        break;
        case 'Prison':
          this.setState({
            Prison: true,
          })
        break;
        case 'School':
          this.setState({
            School: true,
          })
        break;
      }
    } else {
      switch(e.target.id) {
        case 'Bank':
          this.setState({
            BankHover: false,
          })
        break;
        case 'Court':
          this.setState({
            CourtHover: false,
          })
        break;
        case 'Library':
          this.setState({
            LibraryHover: false,
          })
        break;
        case 'Politics':
          this.setState({
            PoliticsHover: false,
          })
        break;
        case 'Prison':
          this.setState({
            PrisonHover: false,
          })
        break;
        case 'School':
          this.setState({
            SchoolHover: false,
          })
        break;
      }
    }
  }
  MouseClick = (e) => {
    this.setState({
      ModalActive: true,
    })
    switch(e.target.id) {
      case 'Bank':
        this.setState({
          ModalContent: 'Bank',
          Bank: true,
        })
      break;
      case 'Court':
        this.setState({
          ModalContent: 'Court',
          Court: true,
        })
      break;
      case 'Library':
        this.setState({
          ModalContent: 'Library',
          Library: true
        })
      break;
      case 'Politics':
        this.setState({
          ModalContent: 'Politics',
          Politics: true,

        })
      break;
      case 'Prison':
        this.setState({
          ModalContent: 'Prison',
          Prison: true,
        })
      break;
      case 'School':
        this.setState({
          ModalContent: 'School',
          Scool: true,
        })
      break;
    }
  }
  CloseModal = (e) => {
    if(e.target.id == 'ModalContainer') {
      this.setState({
        Bank: false,
        Court: false,
        Library: false,
        Politics: false,
        Prison: false,
        School: false,
        BankHover: false,
        CourtHover: false,
        LibraryHover: false,
        PoliticsHover: false,
        PrisonHover: false,
        SchoolHover: false,
        ModalActive: false,
        ModalContent: '',
      })
    }
    else if(e.target.id == 'ButtonClose') {
      this.setState({
        Bank: false,
        Court: false,
        Library: false,
        Politics: false,
        Prison: false,
        School: false,
        BankHover: false,
        CourtHover: false,
        LibraryHover: false,
        PoliticsHover: false,
        PrisonHover: false,
        SchoolHover: false,
        ModalActive: false,
        ModalContent: '',
      })
    }
  }
  componentWillMount() {
    switch (browser && browser.name) {
      case 'ie':
        console.log('Not support ESC Key.');
      break     
      default:
        window.addEventListener('keydown', this.handleKeyDown);
    }
  }
  componentWillUnmount() {
    switch (browser && browser.name) {
      case 'ie':
        console.log('Not support ESC Key.');
      break     
      default:
        window.addEventListener('keydown', this.handleKeyDown);
    }
  }
  handleKeyDown = (e) => {
    if(e.keyCode == 27){
      this.setState({
        Bank: false,
        Court: false,
        Library: false,
        Politics: false,
        Prison: false,
        School: false,
        BankHover: false,
        CourtHover: false,
        LibraryHover: false,
        PoliticsHover: false,
        PrisonHover: false,
        SchoolHover: false,
        ModalActive: false,
        ModalContent: '',
      })
    }
  }
  render(){
    return(
      <AppView>
				<Header/>
				<Menu 
          ListItems={Menuitems}
          MouseClick={this.MouseClick}
          ModalContent={this.state.ModalContent}
        />
				<Body
          MouseClick={this.MouseClick}
          MouseEnter={this.MouseEnter}
          MouseLeave={this.MouseLeave}
          CloseModal={this.CloseModal}
          ModalActive={this.state.ModalActive}
          ModalContent={this.state.ModalContent}
          Bank={this.state.Bank}
          BankHover={this.state.BankHover}
          Court={this.state.Court}
          CourtHover={this.state.CourtHover}
          Library={this.state.Library}
          LibraryHover={this.state.LibraryHover}
          Politics={this.state.Politics}
          PoliticsHover={this.state.PoliticsHover}
          Prison={this.state.Prison}
          PrisonHover={this.state.PrisonHover}
          School={this.state.School}
          SchoolHover={this.state.SchoolHover}
        />
        <Footer/>
			</AppView>
		)
	}
}

export default App