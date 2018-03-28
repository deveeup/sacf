
import React, { Component } from 'react'
import LibraryEdifice from './assets/LibraryEdifice.png'
import LibraryView from '../components/library-view'
import ListItems from './assets/list-items.json'

class Library extends Component {
  state = {
    ContentLibrary: 'Library-2',
  }

  ClickMenuLibrary = (e) => {
    e.preventDefault();
    this.setState({
      ContentLibrary: e.target.id
    })
  }

  render(){
    return(
      <LibraryView
        ListItems={ListItems}
        LibraryEdifice={LibraryEdifice}
        ClickMenuLibrary={this.ClickMenuLibrary}
        ContentLibrary={this.state.ContentLibrary}
      />
    )
  }
} 

export default Library