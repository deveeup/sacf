
import React, { Component } from 'react'
import ListItems from './assets/Politics-Text.json'
import PoliticsEdifice from './assets/PoliticsEdifice.png'
import PoliticsView from '../components/politics-view'

class Politics extends Component {
  state = {
    ContentPolitics: 'Politics-6',
  }

  ClickMenuPolitics = (e) => {
    e.preventDefault();
    this.setState({
      ContentPolitics: e.target.id
    })
  }
  render(){
    return(
      <PoliticsView
        ClickMenuPolitics={this.ClickMenuPolitics}
        ListItems={ListItems}
        PoliticsEdifice={PoliticsEdifice}
        ContentPolitics={this.state.ContentPolitics}
      />
    )
  }
}

export default Politics